import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalSearchPageRoutingModule } from './modal-search-routing.module';
import { ModalSearchPage } from './modal-search.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSearchPageRoutingModule,
    TranslateModule
  ],
  declarations: [ModalSearchPage]
})
export class ModalSearchPageModule {}
