import { Component, OnInit } from '@angular/core';
import { ContestsService } from 'src/app/services/contests.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.page.html',
  styleUrls: ['./contests.page.scss'],
})
export class ContestsPage implements OnInit {

  public contests = [];
  private page = 1;

  constructor(
    private contestsService: ContestsService
    ) { }

  ngOnInit() {
    this.getContests();
  }

  getContests() {
    this.contestsService.getContests(this.page).subscribe( data => {
      this.contests = (data as Array<any>);
      console.log(this.contests);
    });
  }

}
