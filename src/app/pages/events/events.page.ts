import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { EventsService } from 'src/app/services/events.service';

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
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents(this.page).subscribe( data => {
      this.events = (data as Array<any>);
      console.log(this.events);
    });
  }

  searchDate(value) {
    this.searchType = value;
    if (value === 3) {
      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting date: ', err)
      );
    }
  }

}
