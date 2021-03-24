import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/model/auth.model'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserUpdateComponent implements OnInit {
  errors: any = null;
  currentUser: SigninResult | null = null
  updatedUser: any = {}
  updateForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl(`${this.currentUser?.taiKhoan}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    matKhau: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl(`${this.currentUser?.email}`, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    hoTen: new FormControl(this.currentUser?.hoTen, [Validators.required]),
    soDt: new FormControl(this.currentUser?.soDT, [Validators.required])
  })




  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.currentUser.asObservable().subscribe({
      next: (result) => {
        this.currentUser = result;
        console.log(result)
        this.updateForm = new FormGroup({
          taiKhoan: new FormControl(`${this.currentUser?.taiKhoan}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
          matKhau: new FormControl("", [Validators.required, Validators.minLength(3)]),
          email: new FormControl(`${this.currentUser?.email}`, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
          hoTen: new FormControl(this.currentUser?.hoTen, [Validators.required]),
          soDt: new FormControl(this.currentUser?.soDT, [Validators.required])
        })
      },
    })
  }


  handleUpdate() {
    this.auth.updateUser(this.updateForm.value).subscribe({
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
  logOut(){
    localStorage.removeItem("user")
  }

}
