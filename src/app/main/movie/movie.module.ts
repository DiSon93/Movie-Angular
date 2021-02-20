import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { BannerComponent } from './banner/banner.component';
import { ShowTimesComponent } from './show-times/show-times.component';

import {MatButtonModule} from '@angular/material/button';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [MovieComponent, BannerComponent, ShowTimesComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatButtonModule,
    RatingModule,
    FormsModule,
  ]
})
export class MovieModule { }
