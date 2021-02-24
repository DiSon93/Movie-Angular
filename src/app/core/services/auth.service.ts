import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

import { SignupParams, SignupResult, SigninParams, SigninResult } from '../model/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  currentUser = new BehaviorSubject<SigninResult | null> (null);
  
  constructor(private http: HttpClient) { 
    const user = localStorage.getItem('user');
    if(user) {
      this.currentUser.next(JSON.parse(user));
    }
  }

  signup(value: SignupParams): Observable<SignupResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
     return this.http.post<SignupResult>(url,  { ...value, maNhom: 'GP01' })
  }
  signin(value: SigninParams): Observable<SigninResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post<SigninResult>(url, value);
  }

}
