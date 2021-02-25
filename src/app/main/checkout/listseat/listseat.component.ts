import { Component, OnInit, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SeatComponent } from '../seat/seat.component'

@Component({
  selector: 'app-listseat',
  templateUrl: './listseat.component.html',
  styleUrls: ['./listseat.component.scss']
})
export class ListseatComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @ViewChildren('seat') seatComponent! : SeatComponent [];
  listSeat: any[] = [];
  listSeatLeft: any[] = [];
  // for (let i=0; i<60; i++){
  //   this.listSeatLeft.push(seat[i])
  // }

  listSeatRight: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  handleSelect(seat: any){
    this.onSelect.emit(seat)
  }
  handleRemove(seatID: any){
    //View Children đến component seat, bởi vì ta có 1 danh sách các component seat chứ không phải 1 component nên phải sử dụng viewChildren
    this.seatComponent.forEach((seatComponent : SeatComponent) => {
      //Kiểm tra ID của ghế trùng với seatID nhận được thì set biến isSelect của seat đó thành false
      if(seatComponent.seat.id === seatID){
        seatComponent.isSelect = false;
      }
    })
  }
  handleListSeat(seat: any){
    this.listSeat = seat;
    console.log(seat)
    for (let i=0; i<60; i++){
    this.listSeatLeft.push(seat[i])
  }
  for (let i=60; i<120; i++){
    this.listSeatRight.push(seat[i])
  }
  }
}
