import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  public blogs = [];
  private page = 1;

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogsService.getBlogs(this.page).subscribe( data => {
      this.blogs = (data as Array<any>);
      this.page++;
    });
  }

}
