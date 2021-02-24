import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true => cho phép rời khỏi route

    // Kiểm tra xem form đã bị thay đổi hay chưa
    const isDirty =
      component.signupForm.dirty && !component.signupForm.submitted;

    if (isDirty) {
      return confirm('Bạn có chắc muốn rời khởi trang này không?');
    }

    return true;
  }
}
