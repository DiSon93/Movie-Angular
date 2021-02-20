import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SinginComponent implements OnInit {
  errors: any = null;
  signinForm: FormGroup= new FormGroup ({
    taiKhoan: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    matKhau: new FormControl("", [Validators.required, Validators.minLength(3)])
  })




  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignin(){
    //Đánh dấu tất cả input có trạng thái touched thành true
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return ;

    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        localStorage.setItem("user", JSON.stringify(result));
        this.router.navigateByUrl('/');
        console.log(result)
      },
      error: (error) => {
        this.errors= error
        console.log(error);
      },
    })


  }
}
