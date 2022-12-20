import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './core/components/tasks/tasks.component';
import { UsersComponent } from './core/components/users/users.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
