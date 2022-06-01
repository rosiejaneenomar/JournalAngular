import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
