import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private userService : UserService,
    private translate: TranslateService,
    private router : Router) { }

  ngOnInit() {
  }

  login() {
    if(this.email != "" && this.password != "") {
      this.userService.login(this.email, this.password).subscribe( data => {
        console.log(data);
      });
    } else {
      alert(this.translate.get("common.enter_required_data"));
    }
  }

  forgot() {
    this.router.navigate(['forgot']);
  }

  register() {
    this.router.navigate(['register']);
  }

}
