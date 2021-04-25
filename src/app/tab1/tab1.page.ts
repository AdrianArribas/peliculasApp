import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public recentMovies: Pelicula[] = [];
  public popularTv: Pelicula[] = [];

  constructor(private movies: MoviesService) { }
  ngOnInit(): void {

    this.movies.getPopularMovies().subscribe((res) => {
      this.recentMovies = res.results;
      console.log('recentMovies', this.recentMovies);
    });

    this.movies.getPopularTV().subscribe(res => {
      this.popularTv = res.results;
      console.log('TV: ', this.popularTv);
    });

  }
}
