import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { NotificationsPage } from '../notifications/notifications.page';
import { ChatsPage } from '../chats/chats.page';
import { GroupsPage } from '../groups/groups.page';
import { EventsPage } from '../events/events.page';
import { BlogsPage } from '../blogs/blogs.page';
import { CreatePostPage } from '../create-post/create-post.page';
import { CreatePage } from '../create/create.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'events',
        component: EventsPage,
      },
      {
        path: 'groups',
        component: GroupsPage,
      },
      {
        path: 'blogs',
        component: BlogsPage,
      },
      {
        path: 'create',
        component: CreatePage,
      },
      {
        path: 'create-post',
        component: CreatePostPage,
      },
      {
        path: 'chat',
        component: ChatsPage,
      },
      {
        path: 'notifications',
        component: NotificationsPage,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslateModule],
  exports: [RouterModule, TranslateModule],
})
export class TabsPageRoutingModule {}
