import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router'
import { UserList } from 'src/app/core/model/admin.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { UserUpdate } from 'src/app/core/model/admin.model'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateUserComponent implements OnInit {
    userDetail: UserList | any = null;
    errors: any = null;
    // currentUser: UserList | null = null
    updatedUser: any = {}
    updateUserForm: FormGroup = new FormGroup({
      taiKhoan: new FormControl(`${this.userDetail?.taiKhoan}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      matKhau: new FormControl(`${this.userDetail?.matKhau}`, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(`${this.userDetail?.email}`, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      hoTen: new FormControl(this.userDetail?.hoTen, [Validators.required]),
      soDt: new FormControl(this.userDetail?.soDt, [Validators.required]),
      maLoaiNguoiDung: new FormControl(this.userDetail?.maLoaiNguoiDung, [Validators.required])
    })



  constructor(private router: Router,
    private admin: AdminService
    ) { 
    this.userDetail = this.router.getCurrentNavigation()?.extras;
    console.log(this.userDetail)
  }

  ngOnInit(): void {
    console.log(this.userDetail)
    this.updateUserForm= new FormGroup({
      taiKhoan: new FormControl(`${this.userDetail?.taiKhoan}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      matKhau: new FormControl(`${this.userDetail?.matKhau}`, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(`${this.userDetail?.email}`, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      hoTen: new FormControl(this.userDetail?.hoTen, [Validators.required]),
      soDt: new FormControl(this.userDetail?.soDt, [Validators.required]),
      maLoaiNguoiDung: new FormControl(this.userDetail?.maLoaiNguoiDung, [Validators.required])
    })
  }
  handleUpdate(){
     this.admin.updateUser(this.updateUserForm.value).subscribe({
       next: (result) => {
        console.log(result)
        this.updatedUser = result;
        let element: HTMLElement | null = document.getElementById('modal-trigger');
        element?.click();
       },
       error: (error) => {
        this.errors = error
        console.log(error)
       }
     })
  }

}
