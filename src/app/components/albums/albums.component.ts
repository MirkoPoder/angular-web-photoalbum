import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

import { Album } from '../../models/Album';
import { User } from '../../models/User';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] | undefined;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums(User.id).subscribe((albums) => {
      this.albums = albums;
    });
  }

  deleteAlbum(album: Album) {
    this.albums = this.albums?.filter((a) => a.id !== album.id);
    this.albumService.deleteAlbum(album).subscribe();
  }

  addAlbum(album: Album) {
    this.albumService.addAlbum(album).subscribe((album) => {
      this.albums?.push(album);
    });
  }
}
