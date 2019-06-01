import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { UserEditComponent } from '../users/user-edit.component';
import { NewUserComponent } from '../users/new-user.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'editar/:id',
                component: UserEditComponent
            },
            {
                path: 'new',
                component: NewUserComponent
            },
            {
                path: '',
                component: UsersComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
