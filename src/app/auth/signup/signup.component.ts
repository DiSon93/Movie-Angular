import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm
  errors: any = null;
  modal: boolean = false;

  // @ViewChild('myDiv') myDiv: <ElementRef>;
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleSignup(){

  // Làm sao lấy đc value của form, sử dụng ViewChild
  if(this.signupForm.invalid)
   return
  //  alert(JSON.stringify(this.signupForm.value))
  this.auth.signup(this.signupForm.value).subscribe({
    next: (result) => {
      // alert("Chúc mừng bạn đã đăng ký thành công");
      // (<HTML>document.getElementsByClassName("trigger-btn")).onClick('show');
      // this.modal = true;
      let element: HTMLElement | null = document.getElementById('modal-trigger');
        element?.click();
      // this.router.navigateByUrl('/signin');
      console.log(result)
    },
    error: (error) => {
      this.errors= error
      console.log(error);
    },
  });
  }
}
