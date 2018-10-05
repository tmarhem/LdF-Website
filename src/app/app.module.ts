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
import { SharedModule } from './shared/shared.module';
//import { NavPresentationComponent } from './shared/nav-presentation/nav-presentation.component';
//import { NavActivitiesComponent } from './shared/nav-activities/nav-activities.component';
//import { TemplateMemberStoryComponent } from './shared/template-member-story/template-member-story.component';


//Probably useless
import 'rxjs/Rx';

//Facebook
import { FacebookModule } from 'ng2-facebook-sdk';
import { PresentationFullComponent } from './presentation-full/presentation-full.component';
import { PresentationMembresComponent } from './presentation-membres/presentation-membres.component';
import { ActivitiesSchoolComponent } from './activities-school/activities-school.component';
import { ActivitiesExceptionnalComponent } from './activities-exceptionnal/activities-exceptionnal.component';


/**
INFO Youtube bug probably inherent to the module, http instead of https, can't change it in params

TODO Formulaire de contact
TODO Rename and divide presentation module into 3
**/

//Defining routes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'presentationFull', component: PresentationFullComponent },
  { path: 'presentationMembres', component: PresentationMembresComponent },
  { path: 'activities', component: ActivitiesComponent },  
  { path: 'activitiesSchool', component: ActivitiesSchoolComponent },
  { path: 'activitiesExceptionnal', component: ActivitiesExceptionnalComponent },
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
    PresentationFullComponent,
    PresentationMembresComponent,
    ActivitiesSchoolComponent,
    ActivitiesExceptionnalComponent,
    //TemplateMemberStoryComponent,
    //NavPresentationComponent,
    //NavActivitiesComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    YoutubePlayerModule,
    HttpClientModule,
    FacebookModule.forRoot(),
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
