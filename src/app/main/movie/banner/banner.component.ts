import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/core/services/theater.service';
import { Theater, TheaterDetail, HeThongRapChieu, CumRap, CumRapChieu , MovieTheater, MovieSchedule, DanhSachRapTheoPhim, Movie } from '../../../core/model/theater.model';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  theaterNameList: Theater[] | any = [];
  list: any = [];
  listMovieOfTheater: CumRap | any = [];
  movieOfTheater: MovieTheater[] = [];
  movieListSelect: MovieTheater[] = [];
  movieList: MovieSchedule[] = [];
  maCumRapID: string = '';
  maHeThongRapID: string = 'BHDStar';
  tenCumRapID: string ='';
  diaChiID: string = '';
  rapDetail: any = {
     tenCumRap: '',
     diaChi: ''
  }
  movieTheater: HeThongRapChieu[] | any[] = [];
  movieDetail: DanhSachRapTheoPhim | any = {};
  cumRapChieu: CumRapChieu[] | any = [];
  constructor(private theater: TheaterService,
    private router: Router,
    private activateRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    
   
    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log(params)
        this.theater.getThongTinLichChieuTheoPhim(params.movieID).subscribe({
          next: (result) => {
            this.movieDetail = result;
            this.movieTheater =  this.movieDetail.heThongRapChieu;
           
            console.log(this.movieDetail)
            console.log(this.movieTheater)
            this.chooseTheaterSystem(this.movieTheater[0].maHeThongRap);
            this.chooseTheater(this.movieTheater[0].maHeThongRap);
        
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    });
   
  }
  chooseTheaterSystem(maHeThongRap: string) {
    this.maHeThongRapID = maHeThongRap;
    this.theater.getTheaterSystemDetail(maHeThongRap).subscribe({
      next: (result) => {
        console.log(result);
        // const {theaterList} = result;
        this.theaterNameList = result;
      //   for(let i =0; i < this.movieTheater.length; i++){
      //      for(let j =0; j< this.theaterNameList.length; i++){
      //  this.list = this.theaterNameList.filter(item => item.maCumRap == this.movieTheater[i].)
      //      }
      //   }
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
  chooseTheater(maHeThongRap: string) {
    this.theater.getCumRapDetail(maHeThongRap).subscribe({
      next: (result) => {
        console.log(result);
        this.listMovieOfTheater = result;
        this.movieOfTheater = this.listMovieOfTheater[0].lstCumRap;
        console.log(this.movieOfTheater)
        // this.movieList = this.movieOfTheater.filter(item => {

        // })
      }
    })
  }
  selectTheater(maCumRap: string, tenCumRap: string, diaChi: string) {
    // console.log(tenCumTap);
    this.maCumRapID = maCumRap;
    this.rapDetail.tenCumRap = tenCumRap,
    this.rapDetail.diaChi = diaChi;
    this.theater.currentMovieAddress.next(this.rapDetail);
    this.movieListSelect = this.movieOfTheater.filter(item => item.maCumRap == maCumRap);
    console.log(this.movieListSelect)
    this.movieList = this.movieListSelect[0].danhSachPhim;
    this.theater.currentMovie.next(this.movieList);
    console.log(this.movieList)
  }
  xemChiTietLichChieu(movieID: number) {
    this.router.navigateByUrl(`/movie/${movieID}/show-time/${this.maHeThongRapID}`)
  }
}
