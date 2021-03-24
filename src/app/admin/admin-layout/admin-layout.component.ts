import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import  { Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/model/auth.model'

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  currentUser : SigninResult | null = null;
  currentUserSubscription?: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
   this.currentUserSubscription = this.auth.currentUser.asObservable().subscribe({
     next: (result) => {
   this.currentUser = result;
     }
    })
  }

  ngOnDestroy(): void{
    this.currentUserSubscription?.unsubscribe;
  }
}
