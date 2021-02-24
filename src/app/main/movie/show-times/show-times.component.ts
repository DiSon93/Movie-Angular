import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router'
import { Movie, Showtimes } from 'src/app/core/model/movie.model';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { TheaterService } from 'src/app/core/services/theater.service';
import { Theater, TheaterDetail, CumRap, MovieTheater, MovieSchedule, TheaterSystem, MovieSheduleList } from '../../../core/model/theater.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-show-times',
  templateUrl: './show-times.component.html',
  styleUrls: ['./show-times.component.scss']
})
export class ShowTimesComponent implements OnInit, OnDestroy {

  currentMovie: MovieSchedule[] = [];

  theaterLogo: TheaterSystem | any = [];
  currentMovieSubscription?: Subscription;

  movieDetail: Movie | any = {};
  showtimes: Showtimes[] = [];

  movieFilter: MovieSchedule[] | undefined = [];
  rapDetail: any = {
    tenCumRap: '',
    diaChi: ''
  }
  lichChieuPhim: MovieSheduleList | any = [];
  maHeThongRap: string = '';


  constructor(
    private movieService: MovieService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private theater: TheaterService
  ) { }

  ngOnInit(): void {

    this.currentMovieSubscription = this.theater.currentMovie
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentMovie = result;
          console.log(this.currentMovie)


        },
        error: (error) => {
          // this.errors= error
          console.log(error);
        },
      });
    this.theater.currentMovieAddress
      .asObservable()
      .subscribe({
        next: (result) => {
          this.rapDetail = result;
          console.log(this.rapDetail)


        },
        error: (error) => {
          // this.errors= error
          console.log(error);
        },
      });

    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        //  this.tenCumRap = params.tenCumRapID;
        //  this.diaChi = params.diaChiID;
        this.maHeThongRap = params.maHeThongRapID;
        this.movieService.getMovieDetail(params.movieID).subscribe({
          next: (result) => {
            const { lichChieu, ...detail } = result;
            this.movieDetail = detail;
            this.showtimes = lichChieu;
            console.log(this.movieDetail)
            console.log(this.showtimes)
          },
          error: (error) => {
            console.log(error);
          },
        });
        this.theater.getTheaterSystem(params.maHeThongRapID).subscribe({
          next: (result) => {
            this.theaterLogo = result;
            console.log(this.theaterLogo)
          }
        })

        this.movieFilter = this.currentMovie.filter(item => item.maPhim == params.movieID);
        console.log(this.movieFilter)


        this.lichChieuPhim = this.movieFilter[0].lstLichChieuTheoPhim;
        // this.giaVe = this.lichChieuPhim.giaVe;
        // this.maLichChieu = this.lichChieuPhim.maLichChieu;
      
  
      }
    })

  }
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentMovieSubscription?.unsubscribe
  }
  datVe(movieID: number, maLichChieu: number, giaVe: number, thoiGianChieu: string){
    this.router.navigateByUrl(`/checkout/${movieID}/${maLichChieu}/${giaVe}/${thoiGianChieu}/${this.maHeThongRap}`)
  }


}
