import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() public peliculas: Pelicula[];

  public slideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  };

  constructor() { }

  ngOnInit() { }

}
