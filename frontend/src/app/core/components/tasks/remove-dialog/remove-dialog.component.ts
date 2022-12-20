import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class TaskRemoveDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [string, string, string][],
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeTask(): void {
    this.dialogRef.close(this.data[0]);
  }
}
