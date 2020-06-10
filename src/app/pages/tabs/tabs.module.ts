import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { HomePage } from '../home/home.page';
import { SideMenuPage } from '../side-menu/side-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage, PostComponent, BlogComponent, HomePage, SideMenuPage]
})
export class TabsPageModule {}
