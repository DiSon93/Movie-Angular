import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class BookmovieGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  console.log('state', state)
      const currentUser = this.auth.currentUser.value;
      if(currentUser){
        return true;
      }
      //Khi không đủ điều kiện truy cạp vào route, 
      (window as any).PATH = state.url;
      // console.log(state.url)
      this.router.navigateByUrl('/signin')
    return false;
  }
  
}
