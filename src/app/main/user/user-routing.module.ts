import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: "", component: UserDetailComponent,
children: [
  {path: "history", component: UserHistoryComponent},
  {path: "update", component: UserUpdateComponent}
  
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
