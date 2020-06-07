import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  public images = [];
  public text = 'hello everyone, that is my first post.';

  constructor() { }

  ngOnInit() {}

}
