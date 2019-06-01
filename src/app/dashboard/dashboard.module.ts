import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './routing.module';
import { UserService } from '../services/user.service';
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from './dashboard.component';
import { UserEditComponent } from '../users/user-edit.component';
import { NewUserComponent } from '../users/new-user.component';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, UserEditComponent, NewUserComponent],
  imports: [CommonModule, RoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [DashboardComponent, UsersComponent],
  providers: [UserService]
})
export class DashboardModule { }
