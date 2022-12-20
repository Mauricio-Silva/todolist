import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { TaskDetailDialogComponent } from './tasks/detail-dialog/detail-dialog.component';
import { TaskInsertDialogComponent } from './tasks/insert-dialog/insert-dialog.component';
import { TaskRemoveDialogComponent } from './tasks/remove-dialog/remove-dialog.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserDetailDialogComponent } from './users/detail-dialog/detail-dialog.component';
import { UserInsertDialogComponent } from './users/insert-dialog/insert-dialog.component';
import { UserRemoveDialogComponent } from './users/remove-dialog/remove-dialog.component';
import { UsersComponent } from './users/users.component';



const COMPONENTS = [
    UserDetailDialogComponent,
    UserInsertDialogComponent,
    UserRemoveDialogComponent,
    TaskDetailDialogComponent, 
    TaskInsertDialogComponent, 
    TaskRemoveDialogComponent,
    UsersComponent,
    TasksComponent, 
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
