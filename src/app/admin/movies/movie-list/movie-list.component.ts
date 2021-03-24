import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationBehaviorOptions } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieService} from 'src/app/core/services/movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] | any = [];

  displayedColumns: string[] = ['maPhim', 'tenPhim', 'biDanh', 'hinhAnh', 'moTa', 'maNhom', 'ngayKhoiChieu', 'danhGia', 'select'];
  dataSource: MatTableDataSource<Movie[]> | any = null;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private movie: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.movie.getMovieList().subscribe({
    next: (result) => {
      this.movieList = result;
      console.log(this.movieList);
      this.dataSource = new MatTableDataSource(this.movieList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.searchUserList = this.userList;
    },
    error: (error) => {
      console.log(error)
    }
  })
  }
  onUpdate(element: any){
    let navigationExtras: NavigationBehaviorOptions = element;
    this.router.navigateByUrl("/admin/movies/update", navigationExtras);
  }
  onDelete(element: any){

  }

}
