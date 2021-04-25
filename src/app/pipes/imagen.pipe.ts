import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  public dummyImg = environment.dummyImg;
  public url = environment.imgPath;

  transform(img: string, size: string = 'w300'): string {  // el parametro fuera de los parentesis es el tipo de respuesta

    if (!img) {
      return this.dummyImg;
    }

    const imgUrl = this.url + size + img;
    // console.log('img', imgUrl);
    return imgUrl;
  }

}
