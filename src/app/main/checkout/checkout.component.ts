import { Component, OnInit, ViewChild } from '@angular/core';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ListseatComponent } from './listseat/listseat.component'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('listSeatBooked') bookticketComponent!:
  BookticketComponent;
  @ViewChild('listSeat') listseatComponent!: ListseatComponent;
  constructor() { }

  ngOnInit(): void {
  }
  handleSelect(seat: any){
    this.bookticketComponent.handleSelect(seat)
  }
  handleRemove(seatID: any){
    this.listseatComponent.handleRemove(seatID)
  }

}
