import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  public groups = [];
  private page = 1;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupsService.getGroups(this.page).subscribe( data => {
      this.groups = (data as Array<any>);
      console.log(this.groups);
    });
  }

}
