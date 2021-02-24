import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from 'src/app/core/services/theater.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie, Showtimes } from 'src/app/core/model/movie.model';
import { TheaterSystem, BookTicket, Seat } from 'src/app/core/model/theater.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/model/auth.model';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.scss']
})
export class BookticketComponent implements OnInit, OnDestroy {
  listSeat: any[] = [];
  // maLichChieu: number = 0;
  giaVe: number = 0;
  movieDetail: Movie | any = {};
  showtimes: Showtimes[] = [];
  thoiGianChieu: string = '';
  theaterLogo: TheaterSystem | any = [];
  rapDetail: any = {
    tenCumRap: '',
    diaChi: ''
  }
  price: number = 0;
  bookTicket : BookTicket | any = {
    maLichChieu: 0,
    danhSachVe: [ ],
    taiKhoanNguoiDung: ''
  };

  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;
  ticketItem : Seat | any = {};
  // danhSachVe : any[] = []


  @Output() onRemove = new EventEmitter();
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private theater: TheaterService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
     this.bookTicket.maLichChieu = params.maLichChieu;
     this.giaVe = params.giaVe;
    //  this.bookTicket.danhSachVe.giaVe = params.giaVe;
     this.thoiGianChieu = params.thoiGianChieu;
     this.movieService.getMovieDetail(params.movieID).subscribe({
       next: (result) => {
         const {lichChieu, ...detail} = result;
          this.movieDetail = detail;
          this.showtimes = lichChieu;
          console.log(this.showtimes)
       }
     })
     this.theater.getTheaterSystem(params.maHeThongRap).subscribe({
      next: (result) => {
        this.theaterLogo = result;
        console.log(this.theaterLogo)
      }
    })

      }
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
      this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
          this.bookTicket.taiKhoanNguoiDung = this.currentUser?.taiKhoan;
        },
      });
     
  }
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentUserSubscription?.unsubscribe
  }

  handleSelect(seat: any){
    if(seat.isSelect){
      this.listSeat.push(seat);
      console.log(seat)
      this.ticketItem= {
        maGhe : seat.id,
        giaVe: this.giaVe
      }
      // this.danhSachVe.push(this.ticketItem)
      this.bookTicket.danhSachVe.push(this.ticketItem)
      console.log(this.bookTicket)
    } 
    else {
      this.listSeat = this.listSeat.filter((item) => item.id !== seat.id);
      this.ticketItem= {
        maGhe : seat.id,
        giaVe: this.giaVe
      }
      this.bookTicket.danhSachVe = this.bookTicket.danhSachVe.filter((item : any) => item.maGhe !== this.ticketItem.maGhe)
      // this.listTicket = this.listTicket.filter((item => item.maGhe != seat.name)
    }
    this.price = this.giaVe*this.listSeat.length;
    // this.listTicket.

  }
  handleRemove(seatID: any){
        //B1: xóa ghế khỏi mảng
        this.listSeat = this.listSeat.filter((item) => item.id !== seatID)

        //B2: Output  seatID lên component cha
        this.onRemove.emit(seatID)
  }
  sendTicket(ticket: BookTicket){
    this.theater.bookTicket(ticket).subscribe({
      next: (result) =>{
        console.log(result)
      },
      error: (error)=> {
        console.log(error)
      }
    })
  }
}
