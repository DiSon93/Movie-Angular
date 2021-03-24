import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth.service'
import { UserDetail, SigninResult, ThongTinDatVe } from 'src/app/core/model/auth.model'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
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
  logOut(){
    localStorage.removeItem("user");
  }

}
