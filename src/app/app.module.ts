import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentPresentationComponent } from './content-presentation/content-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentHomeComponent,
    ContentPresentationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
