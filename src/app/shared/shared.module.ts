import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFrameworkComponent } from './base-framework/base-framework.component';
import { NavPresentationComponent } from './nav-presentation/nav-presentation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseFrameworkComponent, NavPresentationComponent]
})
export class SharedModule { }
