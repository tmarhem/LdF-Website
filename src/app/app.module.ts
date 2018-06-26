import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentPresentationComponent } from './content-presentation/content-presentation.component';

//Defining routes
const appRoutes: Routes = [
  { path: 'home', component: ContentHomeComponent },
  { path: 'presentation', component: ContentPresentationComponent },
  { path: 'activities', component: ContentHomeComponent },
  { path: 'joinUs', component: ContentHomeComponent },
  { path: 'contact', component: ContentHomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentHomeComponent,
    ContentPresentationComponent,
  ],
  imports: [
    BrowserModule
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
