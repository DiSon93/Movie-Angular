import { Component, OnInit, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SeatComponent } from '../seat/seat.component'

@Component({
  selector: 'app-listseat',
  templateUrl: './listseat.component.html',
  styleUrls: ['./listseat.component.scss']
})
export class ListseatComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @ViewChildren('seat') seatComponent! : SeatComponent []
  listSeatLeft: any[] = [
    { id: 1, name: 'A1', price: 100, isActive: false },
    { id: 2, name: 'A2', price: 100, isActive: false },
    { id: 3, name: 'A3', price: 100, isActive: false },
    { id: 4, name: 'A4', price: 100, isActive: false },
    { id: 5, name: 'A5', price: 100, isActive: false },
    { id: 6, name: 'A6', price: 100, isActive: false },
    { id: 7, name: 'B1', price: 100, isActive: false },
    { id: 8, name: 'B2', price: 100, isActive: false },
    { id: 9, name: 'B3', price: 100, isActive: false },
    { id: 10, name: 'B4', price: 100, isActive: false },
    { id: 11, name: 'B5', price: 100, isActive: false },
    { id: 12, name: 'B6', price: 100, isActive: false },
    { id: 13, name: 'C1', price: 100, isActive: false },
    { id: 14, name: 'C2', price: 100, isActive: false },
    { id: 15, name: 'C3', price: 100, isActive: false },
    { id: 16, name: 'C4', price: 100, isActive: false },
    { id: 17, name: 'C5', price: 100, isActive: false },
    { id: 18, name: 'C6', price: 100, isActive: false },
    { id: 19, name: 'D1', price: 100, isActive: false },
    { id: 20, name: 'D2', price: 100, isActive: true },
    { id: 21, name: 'D3', price: 100, isActive: false },
    { id: 22, name: 'D4', price: 100, isActive: false },
    { id: 23, name: 'D5', price: 100, isActive: false },
    { id: 24, name: 'D6', price: 100, isActive: false },
    { id: 25, name: 'E1', price: 100, isActive: false },
    { id: 26, name: 'E2', price: 100, isActive: false },
    { id: 27, name: 'E3', price: 100, isActive: false },
    { id: 28, name: 'E4', price: 100, isActive: false },
    { id: 29, name: 'E5', price: 100, isActive: false },
    { id: 30, name: 'E6', price: 100, isActive: false },
    { id: 31, name: 'F1', price: 100, isActive: false },
    { id: 32, name: 'F2', price: 100, isActive: true },
    { id: 33, name: 'F3', price: 100, isActive: false },
    { id: 34, name: 'F4', price: 100, isActive: false },
    { id: 35, name: 'F5', price: 100, isActive: true },
    { id: 36, name: 'F6', price: 100, isActive: false },
    { id: 37, name: 'G1', price: 100, isActive: false },
    { id: 38, name: 'G2', price: 100, isActive: false },
    { id: 39, name: 'G3', price: 100, isActive: false },
    { id: 40, name: 'G4', price: 100, isActive: false },
    { id: 41, name: 'G5', price: 100, isActive: false },
    { id: 42, name: 'G6', price: 100, isActive: false },
  ];

  listSeatRight: any[] = [
    { id: 43, name: 'H1', price: 100, isActive: false },
    { id: 44, name: 'H2', price: 100, isActive: false },
    { id: 45, name: 'H3', price: 100, isActive: false },
    { id: 46, name: 'H4', price: 100, isActive: true },
    { id: 47, name: 'H5', price: 100, isActive: true },
    { id: 48, name: 'H6', price: 100, isActive: false },
    { id: 49, name: 'I1', price: 100, isActive: false },
    { id: 50, name: 'I2', price: 100, isActive: false },
    { id: 51, name: 'I3', price: 100, isActive: false },
    { id: 52, name: 'I4', price: 100, isActive: false },
    { id: 53, name: 'I5', price: 100, isActive: false },
    { id: 54, name: 'I6', price: 100, isActive: false },
    { id: 55, name: 'K1', price: 100, isActive: false },
    { id: 56, name: 'K2', price: 100, isActive: false },
    { id: 57, name: 'K3', price: 100, isActive: false },
    { id: 58, name: 'K4', price: 100, isActive: false },
    { id: 59, name: 'K5', price: 100, isActive: false },
    { id: 60, name: 'K6', price: 100, isActive: false },
    { id: 61, name: 'L1', price: 100, isActive: false },
    { id: 62, name: 'L2', price: 100, isActive: true },
    { id: 63, name: 'L3', price: 100, isActive: false },
    { id: 64, name: 'L4', price: 100, isActive: false },
    { id: 65, name: 'L5', price: 100, isActive: false },
    { id: 66, name: 'L6', price: 100, isActive: false },
    { id: 67, name: 'E1', price: 100, isActive: false },
    { id: 68, name: 'M2', price: 100, isActive: true },
    { id: 69, name: 'M3', price: 100, isActive: true },
    { id: 70, name: 'M4', price: 100, isActive: false },
    { id: 71, name: 'M5', price: 100, isActive: false },
    { id: 72, name: 'M6', price: 100, isActive: false },
    { id: 73, name: 'N1', price: 100, isActive: false },
    { id: 74, name: 'N2', price: 100, isActive: true },
    { id: 75, name: 'N3', price: 100, isActive: false },
    { id: 76, name: 'N4', price: 100, isActive: false },
    { id: 77, name: 'N5', price: 100, isActive: true },
    { id: 78, name: 'N6', price: 100, isActive: false },
    { id: 79, name: 'S1', price: 100, isActive: false },
    { id: 80, name: 'S2', price: 100, isActive: false },
    { id: 81, name: 'S3', price: 100, isActive: false },
    { id: 82, name: 'S4', price: 100, isActive: false },
    { id: 83, name: 'S5', price: 100, isActive: false },
    { id: 84, name: 'S6', price: 100, isActive: false },
  ];

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
}
