import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';

const routes: Routes= [
  {path: "", component: AdminLayoutComponent,
children: [
  {path: "", redirectTo: "users"},
  {path: "users", loadChildren: () => UsersModule},
  {path: "movies", loadChildren: () => MoviesModule}
] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
