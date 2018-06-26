import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentPresentationComponent } from './content-presentation/content-presentation.component';
import { ActivitiesComponent } from './activities/activities.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

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
export class AppModule { }
