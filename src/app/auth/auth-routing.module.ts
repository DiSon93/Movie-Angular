import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children : [
      {path: "signin", component: SinginComponent},
      {path: "signup", component: SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
