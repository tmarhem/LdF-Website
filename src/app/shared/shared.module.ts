import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFrameworkComponent } from './base-framework/base-framework.component';
//import { NavPresentationComponent } from './nav-presentation/nav-presentation.component';
//import { NavActivitiesComponent } from './nav-activities/nav-activities.component';
import { TemplateMemberStoryComponent } from './template-member-story/template-member-story.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BaseFrameworkComponent,
    //NavPresentationComponent,
    //NavActivitiesComponent,
    TemplateMemberStoryComponent
  ],
  declarations: [BaseFrameworkComponent, 
    //NavPresentationComponent, 
    //NavActivitiesComponent, 
    TemplateMemberStoryComponent]
})
export class SharedModule { }
