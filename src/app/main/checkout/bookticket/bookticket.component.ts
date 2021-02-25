import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from 'src/app/core/services/theater.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie, Showtimes } from 'src/app/core/model/movie.model';
import { TheaterSystem, BookTicket, Seat, ThongTinPhim, DanhSachGhe } from 'src/app/core/model/theater.model';
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

    thongTinPhim : ThongTinPhim | any = {};
    danhSachGhe : DanhSachGhe[] | any[] = []; 

    thoiLuong: number = 0;
  theaterLogo: TheaterSystem | any = [];
  rapDetail: any = {
    tenCumRap: '',
    diaChi: ''
  }

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
  @Output() pushListSeat = new EventEmitter();
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
  
     this.thoiLuong = params.thoiLuong;

     this.theater.getDanhSachPhongVe(params.maLichChieu).subscribe({
      next: (result) => {
        console.log(result)
        const {thongTinPhim, danhSachGhe} = result;
         this.thongTinPhim = thongTinPhim;
         this.danhSachGhe = danhSachGhe;
        //  console.log(this.danhSachGhe)
         console.log(this.thongTinPhim)
         this.pushListSeat.emit(this.danhSachGhe)
      },
      error: (error) => {
        console.log(error)
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
    // this.theater.currentMovieAddress
    //   .asObservable()
    //   .subscribe({
    //     next: (result) => {
    //       this.rapDetail = result;
    //       console.log(this.rapDetail)


    //     },
    //     error: (error) => {
    //       // this.errors= error
    //       console.log(error);
    //     },
    //   });
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
      console.log(seat);
      this.giaVe += seat.giaVe;
      // this.ticketItem= {
      //   maGhe : seat.maGhe,
      //   giaVe: seat.giaVe
      // }
      // // this.danhSachVe.push(this.ticketItem)
      // this.bookTicket.danhSachVe.push(this.ticketItem)
      // console.log(this.bookTicket)
      this.bookTicket.danhSachVe.push(seat)
    } 
    else {
      this.listSeat = this.listSeat.filter((item) => item.id !== seat.id);
      this.giaVe -= seat.giaVe;
      this.ticketItem= {
        maGhe : seat.maGhe,
        giaVe: seat.giaVe
      }
      this.bookTicket.danhSachVe = this.bookTicket.danhSachVe.filter((item : any) => item.maGhe !== this.ticketItem.maGhe)
      // this.listTicket = this.listTicket.filter((item => item.maGhe != seat.name)
    }
  }
  handleRemove(seatID: any){
        //B1: xóa ghế khỏi mảng
        this.listSeat = this.listSeat.filter((item) => item.id !== seatID)

        //B2: Output  seatID lên component cha
        this.onRemove.emit(seatID)
  }
  sendTicket(ticket: any[]){
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
