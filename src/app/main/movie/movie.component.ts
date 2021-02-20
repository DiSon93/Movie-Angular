import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router'
import { Movie, Showtimes } from  'src/app/core/model/movie.model';

import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@ViewChild('commetForm') commentForm!: NgForm;
   form : any = {
      comment: "",
      hinhAnh: ""
   }
   movieDetail: Movie | any = {};
   showtimes: Showtimes[] = [];
   newstar: number = 10;

   currentuser : any = localStorage.getItem("user");
   detailuser : any = JSON.parse(this.currentuser);
   
  constructor(
    private movieService: MovieService, 
    private activateRoute: ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log(params)
        this.movieService.getMovieDetail(params.movieID).subscribe({
          next: (result) => {
            const { lichChieu, ... detail} = result;
            this.movieDetail = detail;
            this.showtimes = lichChieu;
            console.log(this.movieDetail)
            console.log(this.showtimes)
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    })
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.newstar =$event.newValue;
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  handleSubmit(){
    console.log("Hi")
    if(this.form.comment == "")
   return
   console.log(this.form.comment);
   console.log(this.form.hinhAnh);
  }
}
