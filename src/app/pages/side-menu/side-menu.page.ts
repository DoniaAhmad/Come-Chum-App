import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(url) {
    this.router.navigate([url]);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('language');
    this.router.navigate(['/login']);
  }

}
