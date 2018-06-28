import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

//Google Calendar
import { DxSchedulerModule } from 'devextreme-angular';

import 'rxjs/Rx';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';


//Defining routes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'joinUs', component: JoinUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    JoinUsComponent,
    ContactComponent,
    HomeComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    HttpClientModule,
    DxSchedulerModule,
    //Adding defined routes
    RouterModule.forRoot(
      appRoutes,
      //For debugging
      { enableTracing: true }  
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
//GCalendar
  
}
