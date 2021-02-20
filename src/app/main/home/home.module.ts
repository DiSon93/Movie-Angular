import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BookComponent } from './book/book.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';

import {MatButtonModule} from '@angular/material/button';
import { AppMovieComponent } from './app-movie/app-movie.component';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, MovieListComponent, BookComponent, NewsComponent, AppMovieComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
