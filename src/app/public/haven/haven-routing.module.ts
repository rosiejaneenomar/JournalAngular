import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HavenComponent } from './haven.component';

const routes: Routes = [
  {
    path:'',
    component: HavenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HavenRoutingModule { }
