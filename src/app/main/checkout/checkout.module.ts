import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { TheaterComponent } from './theater/theater.component';
import { SeatComponent } from './seat/seat.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ListseatComponent } from './listseat/listseat.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CheckoutComponent, TheaterComponent, SeatComponent, BookticketComponent, ListseatComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatButtonModule
  ]
})
export class CheckoutModule { }
