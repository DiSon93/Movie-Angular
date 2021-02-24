import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router'
import { Movie, Showtimes } from 'src/app/core/model/movie.model';

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
  form: any = {
    comment: "",
    rate: ""
  };
  yourComment: any[] = [

  ];
  like1: number = 0;
  like2: number = 5;
  like3: number = 1;

  display: boolean = false;
  movieDetail: Movie | any = {};
  showtimes: Showtimes[] = [];
  newstar: number = 10;

  isLike1: boolean = true;
  isLike2: boolean = true;
  isLike3: boolean = true;
  currentuser: any = localStorage.getItem("user");
  detailuser: any = JSON.parse(this.currentuser);

  constructor(
    private movieService: MovieService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log(params)
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
      }
    })
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.newstar = $event.newValue;
    this.form.rate = this.newstar;
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  handleSubmit() {
    console.log("Hi")
    if (this.form.comment == "")
      return
      this.display = true;
    console.log(this.form.comment);
    this.yourComment.push(this.form);
    this.form = {
      comment: "",
      rate: ""
    };
    //  <HTMLElement>document.getElementById('closeModal').click();
    let element: HTMLElement | null = document.getElementById('closeModal');
    element?.click();

  }
  addLike1(): number{ 
    this.isLike1= !this.isLike1;
    if(this.isLike1){
      return this.like1-=1
    }else{
      return this.like1+=1
    }
     }
  addLike2():number {
    this.isLike2= !this.isLike2;
    if(this.isLike2){
      return this.like2-=1
    }else{
      return this.like2+=1
    }
     }
  addLike3(): number{ 
    this.isLike3= !this.isLike3;
    if(this.isLike3){
      return this.like3-=1
    }else{
      return this.like3+=1
    }  
  }

}
