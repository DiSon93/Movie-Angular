import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
   currentuser : any = localStorage.getItem("user");
   detailuser : any = JSON.parse(this.currentuser);
  constructor() { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("user");
  }
}
