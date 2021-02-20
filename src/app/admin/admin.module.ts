import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { AdminRoutingModule } from './admin-routing.module';
import { UsersModule } from './users/users.module';
import {AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MoviesModule } from './movies/movies.module'
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // AdminLayoutComponent,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,

  ]
})
export class AdminModule { }
