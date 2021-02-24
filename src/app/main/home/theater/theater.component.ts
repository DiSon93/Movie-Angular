import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/core/services/theater.service';
import { Theater, TheaterDetail, CumRap, MovieTheater, MovieSchedule } from '../../../core/model/theater.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  theaterNameList: Theater | any = [];
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

  constructor(private theater: TheaterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.chooseTheaterSystem('BHDStar');
    this.chooseTheater('BHDStar');
    // this.selectTheater()
  }
  chooseTheaterSystem(maHeThongRap: string) {
    this.maHeThongRapID = maHeThongRap;
    this.theater.getTheaterSystemDetail(maHeThongRap).subscribe({
      next: (result) => {
        console.log(result);
        // const {theaterList} = result;
        this.theaterNameList = result;
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
