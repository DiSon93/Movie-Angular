import { Injectable } from '@angular/core';
import { TheaterSystem, Theater, TheaterDetail, CumRap, MovieSchedule, BookTicket} from '../model/theater.model';
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  currentMovie = new BehaviorSubject<MovieSchedule[]> ([
    {lstLichChieuTheoPhim: [],
    maPhim: 0,
    tenPhim: '',
    hinhAnh: '',
    }
  ]);
  currentMovieAddress = new BehaviorSubject<any> ({})

  constructor(private http: HttpClient) { }
  getTheaterSystem(maHeThongRap : string): Observable<TheaterSystem>{
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
    let params = new HttpParams();
    params = params.append('maHeThongRap', maHeThongRap);
    return this.http.get<TheaterSystem>(url, { params })
  }

  getTheaterSystemDetail(maHeThongRap : string): Observable<Theater>{
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong';
    let params = new HttpParams();
    params = params.append('maHeThongRap', maHeThongRap);
    return this.http.get<Theater>(url, { params })
  }
  getCumRapDetail(maHeThongRap : string): Observable<CumRap>{
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap';
    let params = new HttpParams();
    params = params.append('maHeThongRap', maHeThongRap);
    return this.http.get<CumRap>(url, { params })
  }
  bookTicket(danhSachVe: BookTicket): Observable<any>{
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe';
    return this.http.post<any>(url, danhSachVe)
  }
}
