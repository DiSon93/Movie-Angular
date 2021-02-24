import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService} from 'src/app/core/services/auth.service';
import { SigninResult } from 'src/app/core/model/auth.model'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // Chuyển currentUser thành 1 Observable để có thể theo dõi sự thay đổi của biến này
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
        },
      });
  }
  // Lifecycle: Chạy trước khi component bị huỷ
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentUserSubscription?.unsubscribe
  }
    logOut(){
    localStorage.removeItem("user");
  }
}
