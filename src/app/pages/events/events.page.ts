import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public events = [];
  public searchType = 0;

  constructor(
    private datePicker: DatePicker
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.events = [{
    }, {
    }, {
    }];
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
