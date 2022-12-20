import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { CreateUserDto } from 'src/app/core/models/user';

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class UserInsertDialogComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateUserDto,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendDialogData(): void {   
    this.dialogRef.close(this.userForm.value);   
  }
}