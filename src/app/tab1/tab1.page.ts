import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public recentMovies: Pelicula[] = [];

  constructor(private movies: MoviesService) { }
  ngOnInit(): void {

    this.movies.getMovies().subscribe((res: MovieDBResp) => {

      console.log(res);
      this.recentMovies = res.results;
    });

  }
}
