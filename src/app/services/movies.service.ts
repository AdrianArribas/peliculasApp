/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { MovieDBResp } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  public moviesUrl = environment.moviesUrl;
  public moviesApiKey = environment.moviesApiKey;

  constructor(private http: HttpClient) { }

  public getMovies(fromDate?: string, toDate?: string, language: string = 'es') {
    // formato language: 'es' 'en' 'fr'
    // formato fecha YYYY-MM-DD
    fromDate ? fromDate = fromDate : fromDate = new Date().toISOString().slice(0, 10);
    toDate ? toDate = toDate : toDate = new Date().toISOString().slice(0, 10);

    return this.http.get<MovieDBResp>(
      this.moviesUrl +
      'discover/movie?primary_release_date.gte=' +
      fromDate +
      '&primary_release_date.lte=' +
      toDate +
      '&api_key=' +
      this.moviesApiKey +
      '&language=' +
      language +
      '&include_image_language=' +
      language
    );
  }

  public getPopularMovies(fromDate?: string, toDate?: string, language: string = 'es') {
    // formato language: 'es' 'en' 'fr'
    // formato fecha YYYY-MM-DD
    fromDate ? fromDate = fromDate : fromDate = new Date().toISOString().slice(0, 10);
    toDate ? toDate = toDate : toDate = new Date().toISOString().slice(0, 10);

    return this.http.get<MovieDBResp>(
      this.moviesUrl +
      'discover/movie?ort_by=popularity.desc&.gte=' +
      fromDate +
      '&primary_release_date.lte=' +
      toDate +
      '&api_key=' +
      this.moviesApiKey +
      '&language=' +
      language +
      '&include_image_language=' +
      language
    );
  }

  public getPopularTV() {
    return this.http.get<MovieDBResp>(
      'https://api.themoviedb.org/3/tv/popular?api_key=' +
      this.moviesApiKey +
      '&language=es&include_image_language=es'
    );
  }


}
