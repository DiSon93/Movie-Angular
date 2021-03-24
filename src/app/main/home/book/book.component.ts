import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie.model'
import { MovieService } from 'src/app/core/services/movie.service';
import { TheaterService } from 'src/app/core/services/theater.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  movieList: Movie[] = [];
  movieID: string | null | undefined = '';
  lichChieuPhim : any = [] 
  rapList: any = {}
  constructor(
    private movieService: MovieService,
    private theaterService: TheaterService
  ) { }

  ngOnInit(): void {
    this.movieService
      .getMovieList()
      .subscribe({
        next: (result) => {
          this.movieList = result;
          console.log(this.movieList)
        },
        error: (error) => {
          console.log(error)
          console.log("Error")
        },
        complete: () => {
          console.log("Done")
        }

      })
  }
  chonRap() {
    if(this.movieID){
      this.theaterService.getThongTinLichChieuTheoPhim(this.movieID).subscribe({
        next: (result) => {
        console.log(result);
        this.rapList = result
        }
      })
    }
   
  }
  chonNgayXem(){
      console.log(this.lichChieuPhim)
  }
  xemLichChieuPhim(lichChieu: any){
    console.log("có")
     console.log(lichChieu)
  }
  changeUserName(lichChieu: any){
    console.log("có vào khồn nề")
    console.log(lichChieu.target.value)

  }
 
}

