import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
// import {} MoviesComponent }



const routes: Routes = [
  {path: '' , pathMatch:"full", component: MovieListComponent},
  {path: 'add' ,component: AddMoviesComponent},
  {path: 'update' ,component: UpdateMovieComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
