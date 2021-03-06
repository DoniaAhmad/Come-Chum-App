import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePostPageRoutingModule } from './create-post-routing.module';
import { CreatePostPage } from './create-post.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPageRoutingModule,
    TranslateModule
  ],
  declarations: [CreatePostPage]
})
export class CreatePostPageModule {}
