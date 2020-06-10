import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupsPageRoutingModule } from './groups-routing.module';
import { GroupsPage } from './groups.page';
import { TranslateModule } from '@ngx-translate/core';
import { GroupComponent } from 'src/app/components/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPageRoutingModule,
    TranslateModule
  ],
  declarations: [GroupsPage, GroupComponent]
})
export class GroupsPageModule {}
