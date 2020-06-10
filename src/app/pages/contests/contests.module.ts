import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContestsPageRoutingModule } from './contests-routing.module';
import { ContestsPage } from './contests.page';
import { TranslateModule } from '@ngx-translate/core';
import { ContestComponent } from 'src/app/components/contest/contest.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ContestsPage, ContestComponent]
})
export class ContestsPageModule {}
