import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User'
import { Album } from '../models/Album'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumsUrl:string = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getAlbums(user: User): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumsUrl}/users/${sessionStorage.getItem("id")}/albums`);
  }

  addAlbum(album: Album):Observable<Album> {
    const url = `${this.albumsUrl}/albums`
    console.log(album.userId)
    return this.http.post<Album>(url, album, httpOptions);
  }

  deleteAlbum(album: Album):Observable<Album> {
    const url = `${this.albumsUrl}/albums/${album.id}`;
    console.log("deleted album with id: "+ album.id + " from user with id: " + sessionStorage.getItem("id"))
    return this.http.delete<Album>(url, httpOptions);
  }
}
