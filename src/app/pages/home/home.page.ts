import { Component } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { FeedService } from 'src/app/services/feed.service';
import { ModalController } from '@ionic/angular';
import { ModalSearchPage } from '../modal-search/modal-search.page';
import { MenuController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public trendingBlogs = [];
  public feed = [];
  public oldQuery = '';
  public searchQuery = '';
  public oldData = {};

  private pageId = 1;

  public slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 1
  };

  constructor(
    private blogsService: BlogsService,
    private feedService: FeedService,
    private modalController: ModalController,
    private menu: MenuController,
    private router: Router,
    private navCtrl: NavController,
    private userService: UserService,
    public translate: TranslateService) {
      this.menu.enable(true, 'first');
      this.getFeed();
      this.getTrendingBlogs();
      this.userService.heartBeatOnline();
      this.userService.getNotifications();
    }

  getTrendingBlogs() {
    this.blogsService.getTrending().subscribe( data => {
      this.trendingBlogs = (data as Array<any>);
      console.log(data);
    });
  }

  getFeed() {
    this.feedService.getFeed(this.userService.getData()['id'], this.pageId).subscribe( data => {
      console.log(data);
      this.feed = (data as Array<any>);
      this.pageId++;
    });
  }

  search() {
    if (this.oldQuery !== this.searchQuery) {
      this.oldQuery = this.searchQuery;
      this.pageId = 1;
      this.feed = [];
    }
    this.feedService.search(this.searchQuery, this.pageId).subscribe( data => {
      this.feed = this.feed.concat(data as Array<any>);
      this.pageId++;
    });
  }

  async advanced() {
    const modal = await this.modalController.create({
      component: ModalSearchPage,
      swipeToClose: true,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('advanced', data);
    this.advancedSearch(data);
  }

  advancedSearch(data) {
    if (this.oldData !== data) {
      this.pageId = 1;
      this.oldData = data;
      this.feed = [];
    }
    this.feedService.advancedSearch(data, this.pageId).subscribe(data => {
      this.feed = this.feed.concat(data as Array<any>);
      this.pageId++;
    });
  }

  toggleMenu() {
    this.menu.open('first');
  }

  openPost(index) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          post: JSON.stringify(this.feed[index])
      }
    };
    this.navCtrl.navigateForward(['post'], navigationExtras);
  }

}
