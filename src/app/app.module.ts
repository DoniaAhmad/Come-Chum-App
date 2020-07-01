import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { BlogsService } from './services/blogs.service';
import { FeedService } from './services/feed.service';
import { GroupsService } from './services/groups.service';
import { EventsService } from './services/events.service';
import { ContestsService } from './services/contests.service';
import { CommonModule } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NotificationsService } from './services/notifications.service';
import { ChatService } from './services/chat.service';
import { PackageService } from './services/package.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { InterestsService } from './services/interests.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LocationsService } from './services/locations.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

const config: SocketIoConfig = { url: environment.host, options: {} };

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    BlogsService,
    FeedService,
    AuthService,
    GroupsService,
    ContestsService,
    EventsService,
    NotificationsService,
    InterestsService,
    ChatService,
    PackageService,
    LocationsService,
    DatePicker,
    InAppBrowser,
    FirebaseAuthentication,
    Facebook,
    GooglePlus,
    ImagePicker,
    Chooser,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
