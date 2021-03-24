import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router'
import { UserList } from 'src/app/core/model/admin.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { UserUpdate } from 'src/app/core/model/admin.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userDetail: UserList | any = null;
    errors: any = null;
    // currentUser: UserList | null = null
    updatedUser: any = {}
    addUserForm: FormGroup = new FormGroup({
      taiKhoan: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      matKhau: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      hoTen: new FormControl("", [Validators.required]),
      soDt: new FormControl("", [Validators.required]),
      maLoaiNguoiDung: new FormControl("", [Validators.required])
    })



  constructor(private router: Router,
    private admin: AdminService
    ) { 
    this.userDetail = this.router.getCurrentNavigation()?.extras;
    console.log(this.userDetail)
  }

  ngOnInit(): void {
   
  }
  handleUpdate(){
    console.log(this.addUserForm.value)
     this.admin.addUser(this.addUserForm.value).subscribe({
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
