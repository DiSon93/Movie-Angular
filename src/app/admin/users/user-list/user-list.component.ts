import { Component, OnInit, AfterViewInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { UserList, SearchUser } from 'src/app/core/model/admin.model';
import { Router, NavigationBehaviorOptions } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/core/services/auth.service';
import { SigninResult } from 'src/app/core/model/auth.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: UserList[] | any = [];
  searchkey: string = ""
  searchUserList: UserList[] | any[] = []
  displayedColumns: string[] = ['taiKhoan', 'hoTen', 'email', 'soDt', 'matKhau', 'maLoaiNguoiDung', 'select'];
  dataSource: MatTableDataSource<UserList[]> | any = null
  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private admin: AdminService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.admin.getUserList().subscribe({
      next: (result) => {
        console.log(result)
        this.userList = result;
        this.dataSource = new MatTableDataSource(this.userList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.searchUserList = this.userList;
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
        },
      });
  }
  // const ELEMENT_DATA: UserList[] = 
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   console.log(this.paginator)
  //   this.dataSource.sort = this.sort;
  // }

  onUpdate(element: any) {
    let navigationExtras: NavigationBehaviorOptions = element
    // console.log(navigationExtras.queryParams)
    this.router.navigateByUrl('admin/users/update', navigationExtras)
  }

  onDelete(element: any) {
    console.log(element.taiKhoan)
    this.admin.deleteUser(element.taiKhoan).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  searchUser(event: any) {
    console.log(event.target.value);
    if (event.target.value !== "") {
      this.admin.searchUser(event.target.value.trim()).subscribe({
        next: (result) => {
          console.log(result);
          this.userList = result;
          this.dataSource = new MatTableDataSource(this.userList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
    }
    else if (event.target.value == '') {
      console.log(this.searchUserList)
      this.userList = this.searchUserList;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } 
  }
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentUserSubscription?.unsubscribe
  }
}

