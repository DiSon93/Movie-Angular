import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { MovieComponent } from './movie.component';
import { ShowTimesComponent } from './show-times/show-times.component';

const routes: Routes = [
  {path: "banner", component: BannerComponent},
  {path: "show-time/:maHeThongRapID", component: ShowTimesComponent},
  {path: "", component: MovieComponent},
  // {path: "banner", component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
