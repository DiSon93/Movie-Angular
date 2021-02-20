import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie.model';
//B1: Import servive vaò
import { MovieService } from 'src/app/core/services/movie.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  // styles: [`
  // .next-slide{ 
  //       font-size: 50px;
  //       color: black;
  //       background-color: black;
  //   }
  // `
  // ]
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    console.log("Có vô không?")

    this.movieService
      .getMovieList()
      .subscribe({
        next: (result) => {
          this.movieList = result;
          console.log(this.movieList)
        },
        error: (error) => {
          console.log(error)
          console.log("Error")
        },
        complete: () => {
          console.log("Done")
        }

      })
  }

  layChiTietPhim(movieID: any){
    this.router.navigateByUrl(`/movie/${movieID}`);
  }
  slideConfig = {
    "slidesToShow": 4, "slidesToScroll": 4, 'rows': 2, 'dots': true, 'nav': true, 'autoplay': true, 'autoplayInterval': 4000,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
  };

  addSlide() {
    // this.movieList.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.movieList.length = this.movieList.length - 1;
  }

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }




}
