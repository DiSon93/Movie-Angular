import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private auth: AuthService, private router: Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentUser = this.auth.currentUser.value;
      if(currentUser) {
        if(currentUser.maLoaiNguoiDung === 'QuanTri'){
          //Hợp lệ
          return true;
        }
        //Đã đăng nhập nhưng  khác QuanTri
        this.router.navigateByUrl('/');
        return false;
      }
      //Chuea đăng nhập
      this.router.navigateByUrl('signin');
    return false;
  }
  
}
