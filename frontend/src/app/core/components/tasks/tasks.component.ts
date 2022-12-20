import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDto, UpdateTaskDto } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { TaskDetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { TaskInsertDialogComponent } from './insert-dialog/insert-dialog.component';
import { TaskRemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  dataSource: TaskDto[] = [];
  doTasks: TaskDto[] = [];
  doingTasks: TaskDto[] = [];
  doneTasks: TaskDto[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) { }



  updateDatasource(): void {
    this.doTasks = this.dataSource.filter(task => task.status == 'do')
    this.doingTasks = this.dataSource.filter(task => task.status == 'doing')
    this.doneTasks = this.dataSource.filter(task => task.status == 'done')
  }



  ngOnInit(): void {
    this.taskService.findAll().subscribe(
      {
        next: (tasks) => {
          this.dataSource = tasks;
          this.updateDatasource();
        },
        error: (e) => {
          console.error(e);
        }
      }
    );
  }



  showTaskCreateDialog(): void {
    const dialogRef = this.dialog.open(TaskInsertDialogComponent, { 
      width: '500px', 
      data: {} 
    });
    dialogRef.afterClosed().subscribe((task) => {
      if (task !== undefined) {
        this.taskService.create(task).subscribe(() => {
          this.taskService.findAll().subscribe((tasks) => {
            this.dataSource = tasks;
            this.updateDatasource();
          });
        });
      }
    });
  }



  showTaskRemoveDialog(task: TaskDto): void {
    const dialogRef = this.dialog.open(TaskRemoveDialogComponent, {
      data: [task.id, task.description, task.status],
    });
    dialogRef.afterClosed().subscribe((id) => {
      if (id !== undefined) {
        this.taskService.delete(id).subscribe(() => {
          this.taskService.findAll().subscribe((tasks) => {
            this.dataSource = tasks;
            this.updateDatasource();
          });
        })
      }
    });
  }



  showTaskDetailDialog(task: TaskDto): void {
    this.dialog.open(TaskDetailDialogComponent, { data: task });
  }



  drop(event: CdkDragDrop<TaskDto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const data = event.item.data;
      const id = event.container.element.nativeElement.id;
      this.taskService.changeStatus(data, id).subscribe(() => {
        this.taskService.findAll().subscribe((tasks) => {
          this.dataSource = tasks;
          this.updateDatasource();
        });
      })
    }
  }
}