import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { EventsService } from 'src/app/services/events.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public events = [];
  public searchType = 0;
  private page = 1;

  constructor(
    private datePicker: DatePicker,
    private eventsService: EventsService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents(this.page).subscribe( data => {
      this.events = this.events.concat(data as Array<any>);
      console.log(this.events);
    });
  }

  searchDate(value) {
    this.events = [];
    this.searchType = value;
    const types = ['this_week', 'this_month', 'this_year', 'custom'];
    if (value === 3) {
      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then( date => {
        console.log('Got date: ', date);
        let d;
        d = new Date(date).setDate(new Date(date).getDate() + 1);
        d = new Date(date).toISOString();
        this.eventsService.search(this.page, types[value], d).subscribe ( data =>  {
          this.events = this.events.concat(data as Array<any>);
        });
      }
      );
    } else {
      this.eventsService.search(this.page, types[value], null).subscribe ( data =>  {
        this.events = this.events.concat(data as Array<any>);
      });
    }
  }

}
