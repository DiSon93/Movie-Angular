import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule
  ]
})
export class MainModule { }
