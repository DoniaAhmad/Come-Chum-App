import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlogsPageRoutingModule } from './blogs-routing.module';
import { BlogsPage } from './blogs.page';
import { TranslateModule } from '@ngx-translate/core';
import { BlogComponent } from 'src/app/components/blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsPageRoutingModule,
    TranslateModule
  ],
  declarations: [BlogsPage, BlogComponent]
})
export class BlogsPageModule {}
