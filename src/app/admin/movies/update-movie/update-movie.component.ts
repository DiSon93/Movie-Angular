import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router'
import { MovieDetail } from 'src/app/core/model/movie.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { UserUpdate } from 'src/app/core/model/admin.model'

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  movieDetail: MovieDetail | any = null;
  errors: any = null;
  // currentUser: UserList | null = null
  updatedUser: any = {}
  updateMovieForm: FormGroup = new FormGroup({
    maPhim: new FormControl(`${this.movieDetail?.maPhim}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    tenPhim: new FormControl(`${this.movieDetail?.tenPhim}`, [Validators.required, Validators.minLength(3)]),
    biDanh: new FormControl(`${this.movieDetail?.biDanh}`, [Validators.required]),
    trailer: new FormControl(this.movieDetail?.trailer, [Validators.required]),
    hinhAnh: new FormControl(this.movieDetail?.hinhAnh, [Validators.required]),
    moTa: new FormControl(this.movieDetail?.moTa, [Validators.required, Validators.minLength(10)]),
    maNhom: new FormControl(this.movieDetail?.maNhom, [Validators.required]),
    ngayKhoiChieu: new FormControl(this.movieDetail?.ngayKhoiChieu, [Validators.required]),
    danhGia: new FormControl(this.movieDetail?.danhGia, [Validators.required]),
  })

  constructor(private admin: AdminService, private router: Router) { 
    this.movieDetail = this.router.getCurrentNavigation()?.extras;
    console.log(this.movieDetail)
  }

  ngOnInit(): void {
    this.updateMovieForm = new FormGroup({
      maPhim: new FormControl(`${this.movieDetail?.maPhim}`, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      tenPhim: new FormControl(`${this.movieDetail?.tenPhim}`, [Validators.required, Validators.minLength(3)]),
      biDanh: new FormControl(`${this.movieDetail?.biDanh}`, [Validators.required]),
      trailer: new FormControl(this.movieDetail?.trailer, [Validators.required]),
      hinhAnh: new FormControl(this.movieDetail?.hinhAnh, [Validators.required]),
      moTa: new FormControl(this.movieDetail?.moTa, [Validators.required, Validators.minLength(10)]),
      maNhom: new FormControl(this.movieDetail?.maNhom, [Validators.required]),
      ngayKhoiChieu: new FormControl(this.movieDetail?.ngayKhoiChieu, [Validators.required]),
      danhGia: new FormControl(this.movieDetail?.danhGia, [Validators.required]),
    })
  
  }

  handleUpdate(){
    this.admin.updateMovie(this.updateMovieForm.value).subscribe({
      next: (result) => {
       console.log(result)
       this.updatedUser = result;
       let element: HTMLElement | null = document.getElementById('modal-trigger');
       element?.click();
      },
      error: (error) => {
       this.errors = error
       console.log(error)
      }
    })
 }


}
