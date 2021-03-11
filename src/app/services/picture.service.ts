import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Picture } from '../models/Picture';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  picturesUrl: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getPictures(picture: Picture): Observable<Picture[]> {
    return this.http.get<Picture[]>(
      `${this.picturesUrl}/${sessionStorage.getItem('albumId')}/photos`
    );
  }
}
