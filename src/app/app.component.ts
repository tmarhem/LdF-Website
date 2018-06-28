import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Les Lions de Flandre';
  currentContent = 'app-content-home';

//GCalendar
  dataSource: any;
    currentDate: Date = new Date(2017, 4, 25);

    constructor(private http: HttpClient) {
        this.dataSource = new DataSource({
            store: new CustomStore({
                load: (options) => this.getData(options, { showDeleted: false })
            })
        });
    }

    private getData(options: any, requestOptions: any) {
        let PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k',
            CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
        let dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

        return this.http.get(dataUrl, requestOptions).toPromise().then((data: any) => data.items);
    }
}
