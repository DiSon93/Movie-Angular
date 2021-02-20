import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { SignupParams, SignupResult, SigninParams, SigninResult } from '../model/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(value: SignupParams): Observable<SignupResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
     return this.http.post<SignupResult>(url,  { ...value, maNhom: 'GP01' })
  }
  signin(value: SigninParams): Observable<SigninResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post<SigninResult>(url, value);
  }

}
