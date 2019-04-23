import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../libraries-modules/material/material.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LandingComponent]
})
export class PagesModule {
}