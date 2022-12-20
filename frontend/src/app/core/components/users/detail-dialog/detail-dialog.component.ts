import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UserDto } from 'src/app/core/models/user';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class UserDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDto,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
