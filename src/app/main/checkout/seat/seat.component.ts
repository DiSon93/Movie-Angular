import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat : any;
  @Output() onSelect = new EventEmitter()
  isSelect: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(){
    this.isSelect = !this.isSelect;
    this.onSelect.emit({...this.seat, isSelect : this.isSelect })
    // console.log(this.seat.name)
  }
}
