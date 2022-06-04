import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HavenRoutingModule } from './haven-routing.module';
import { HavenComponent } from './haven.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HavenComponent
  ],
  imports: [
    CommonModule,
    HavenRoutingModule,
    FontAwesomeModule
  ]
})
export class HavenModule { }
