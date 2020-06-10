import { Component } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { FeedService } from 'src/app/services/feed.service';
import { ModalController } from '@ionic/angular';
import { ModalSearchPage } from '../modal-search/modal-search.page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public trendingBlogs = [{
  }, {
  }, {
  }];
  public feed = [{
  }, {
  }, {
  }];
  public searchQuery = '';

  private pageId = 1;

  public slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 1
  };

  constructor(
    private blogsService: BlogsService,
    private feedService: FeedService,
    private modalController: ModalController,
    private menu: MenuController) {
      this.menu.enable(true, 'first');
    }

  getTrendingBlogs() {
    this.blogsService.getTrending().subscribe( data => {
      this.trendingBlogs = (data as Array<any>);
    });
  }

  getFeed() {
    this.feedService.getFeed(1, this.pageId).subscribe( data => {
      this.feed = (data as Array<any>);
      this.pageId++;
    });
  }

  search() {
    this.pageId = 1;
    this.feedService.search(1, this.pageId, this.searchQuery).subscribe( data => {
      this.feed = (data as Array<any>);
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
    console.log(data);
  }

  toggleMenu() {
    this.menu.open('first');
  }

}
