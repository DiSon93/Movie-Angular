import { Injectable } from '@angular/core';
import { AddUser, UserList, SearchUser, AddMovie } from '../model/admin.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserUpdate } from '../model/admin.model'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getUserList(): Observable<UserList[]>{
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung";
    let params = new HttpParams();
    params = params.append('MaNhom', 'GP01')
    return this.http.get<UserList[]>(url, { params })
  }
  updateUser(value: UserUpdate): Observable<any> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return this.http.put<any>(url, {...value, maNhom: 'GP01', maLoaiNguoiDung: 'KhachHang'});
  }

  deleteUser(value: string | any): Observable<any> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung";
    return this.http.delete<any>(url, value);
  }

  addUser(value: AddUser): Observable<any>{
       const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung";
       return  this.http.post<any>(url, {...value, maNhom: 'GP01'})
  }

  searchUser(value: string): Observable<SearchUser>{
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung";
    let params = new HttpParams();
    // let query =  new HttpParams();
    params = params.append('MaNhom', 'GP01');
    params = params.append('tuKhoa', value);

    return  this.http.get<SearchUser>(url, { params : params})
}


  uploadImage(value: any): Observable<any>{
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh";
    const formData = new FormData();
    for (const key in value) {
      formData.append(key, value[key]);
    }
   
    return this.http.post<any>(url, formData)
  }
  addMovie(value: AddMovie): Observable<any>{
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim";

    return this.http.post<any>(url, value)
  }
  
  updateMovie(value: AddMovie): Observable<any>{
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim";
    
    return this.http.post(url, value)
  }
}
