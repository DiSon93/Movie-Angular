import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../model/movie.model';
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    console.log("TT")
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    return this.http.get<Movie[]>(url)
  };

  getMovieDetail(movieID: string): Observable<MovieDetail>{
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim';
    let params = new HttpParams();
    params = params.append('maPhim', movieID);
    return this.http.get<MovieDetail>(url, { params })
  }


}
