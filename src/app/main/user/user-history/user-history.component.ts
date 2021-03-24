import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth.service'
import { UserDetail, SigninResult, ThongTinDatVe } from 'src/app/core/model/auth.model';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  currentUser: SigninResult | any = {};
  currentUserSubscription?: Subscription;
  userDetail: UserDetail | any = {};
  thongTinDatVe: ThongTinDatVe[] | any = []

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
        },
      });
    this.auth.getUserDetail(this.currentUser).subscribe({
      next: (result) => {
        this.userDetail = result;
        console.log(this.userDetail)
        this.thongTinDatVe = result?.thongTinDatVe;
      }
    })
  }
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentUserSubscription?.unsubscribe
  }

}
