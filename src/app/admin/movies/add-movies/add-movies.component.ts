import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service'
import { Router } from '@angular/router'
import { UserList } from 'src/app/core/model/admin.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserUpdate } from 'src/app/core/model/admin.model';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {
  userDetail: UserList | any = null;
  errors: any = null;
  img : any = '';
  // currentUser: UserList | null = null
  updatedUser: any = {}
  addMovieForm: FormGroup = new FormGroup({
    maPhim: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    tenPhim: new FormControl("", [Validators.required, Validators.minLength(3)]),
    biDanh: new FormControl("", [Validators.required]),
    trailer: new FormControl("", [Validators.required]),
    hinhAnh: new FormControl("", [Validators.required]),
    moTa: new FormControl("", [Validators.required, Validators.minLength(10)]),
    ngayKhoiChieu: new FormControl("", [Validators.required]),
    danhGia: new FormControl("", [Validators.required]),
  })


  constructor(
    private admin: AdminService
  ) { }

  ngOnInit(): void {
  }
  handleSelectFile(evt: any) {
    console.log(evt.target.files);
    // this.admin.uploadImage(evt.target.files).subscribe({
    //   next: (result) => {
    //     console.log(result)
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
    this.img = evt.target.files;

  }
  handleAddMovie(){
    console.log({...this.addMovieForm.value, hinhAnh: this.img})
     this.admin.addMovie({...this.addMovieForm.value, hinhAnh: this.img}).subscribe({
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
