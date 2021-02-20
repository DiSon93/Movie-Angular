import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-movie',
  templateUrl: './app-movie.component.html',
  styleUrls: ['./app-movie.component.scss']
})
export class AppMovieComponent implements OnInit {
  listApp: any[] = [
    { id: 1, hinhAnh: "assets/img/slide1.jpg" },
    { id: 2, hinhAnh: "assets/img/slide2.jpg" },
    { id: 3, hinhAnh: "assets/img/slide3.jpg" },
    { id: 4, hinhAnh: "assets/img/slide4.jpg" },
    { id: 5, hinhAnh: "assets/img/slide5.jpg" },
    { id: 6, hinhAnh: "assets/img/slide6.jpg" },
    { id: 7, hinhAnh: "assets/img/slide7.jpg" },
    { id: 8, hinhAnh: "assets/img/slide8.jpg" },
    { id: 9, hinhAnh: "assets/img/slide9.jpg" },
    { id: 10, hinhAnh: "assets/img/slide10.jpg" },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {
    "slidesToShow": 1, "slidesToScroll": 1, 'autoplay': true, 'autoplayInterval': 4000,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
  };

}
