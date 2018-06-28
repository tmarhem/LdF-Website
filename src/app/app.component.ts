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

}
