import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideMenuPageRoutingModule } from './side-menu-routing.module';
import { SideMenuPage } from './side-menu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuPageRoutingModule,
    TranslateModule
  ],
  declarations: [SideMenuPage]
})
export class SideMenuPageModule {}
