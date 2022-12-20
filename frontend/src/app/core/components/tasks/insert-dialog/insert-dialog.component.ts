import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTaskDto } from 'src/app/core/models/task';

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class TaskInsertDialogComponent {
  taskForm = new FormGroup({
    description: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<TaskInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateTaskDto,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendDialogData(): void {
      this.dialogRef.close(this.taskForm.value);   
  }
}