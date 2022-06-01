import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { UserService } from './services/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    AddUserPageComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzButtonModule
  ],
  providers: [UserService]
})
export class UsersModule { }
