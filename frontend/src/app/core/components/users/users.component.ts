import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDto } from '../../models/user';
import { UserService } from './../../services/user.service';
import { UserDetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { UserInsertDialogComponent } from './insert-dialog/insert-dialog.component';
import { UserRemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'status', 'createAt', 'updateAt', 'actions'];
  dataSource!: MatTableDataSource<UserDto>;
  totalUsers!: number;
  totalFalseStatus!: number;
  totalTrueStatus!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }



  ngOnInit(): void {
    this.userService.findAll().subscribe(
      {
        next: (users) => {
          this.dataSource = new MatTableDataSource(users);
          this.paginator.length = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.totalUsers = this.dataSource.data.length;
          this.totalFalseStatus = this.dataSource.data.filter((user) => user.status === false).length;
          this.totalTrueStatus = this.dataSource.data.filter((user) => user.status === true).length;
        },
        error: (e) => {
          console.error(e);
        }
      }
    );
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  showUserCreateDialog(): void {
    const dialogRef = this.dialog.open(UserInsertDialogComponent, { 
      width: '350px', 
      data: {} 
    });
    dialogRef.afterClosed().subscribe((user) => {
      if (user !== undefined) {
        this.userService.create(user).subscribe(() => {
          this.userService.findAll().subscribe((users) => {
            this.dataSource = new MatTableDataSource(users);
          });
        });
      }
    });
  }



  showUserRemoveDialog(user: UserDto): void {
    const dialogRef = this.dialog.open(UserRemoveDialogComponent, {
      data: [user.id, user.name, user.email, user.status],
    });
    dialogRef.afterClosed().subscribe((id) => {
      if (id !== undefined) {        
        this.userService.delete(id).subscribe(() => {
          this.userService.findAll().subscribe((users) => {            
            this.dataSource = new MatTableDataSource(users);
          });
        });
        
      }
    });
  }



  showUserDetailDialog(user: UserDto): void {
    this.dialog.open(UserDetailDialogComponent, { data: user });
  }
}
