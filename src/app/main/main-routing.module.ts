import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MovieModule } from './movie/movie.module';
import { BookmovieGuard } from '../core/guards/bookmovie.guard'

const routes: Routes = [
  //pathMatch: " full" => kiểm tra path phải khớp 100%

  

  {
    path: "", component: MainLayoutComponent,
    children: [
      { path: "checkout/:maLichChieu/:giaVe/:thoiLuong/:maHeThongRap", canActivate: [BookmovieGuard], loadChildren: () => CheckoutModule },
      { path: "", pathMatch: "full", loadChildren: () => HomeModule },
      { path: "movie/:movieID", loadChildren: () => MovieModule },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
