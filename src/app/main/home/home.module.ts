import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BookComponent } from './book/book.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';

import {MatButtonModule} from '@angular/material/button';
import { AppMovieComponent } from './app-movie/app-movie.component';
import { TheaterComponent } from './theater/theater.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, MovieListComponent, BookComponent, NewsComponent, AppMovieComponent, TheaterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
  ]
})
export class HomeModule { }
