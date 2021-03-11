import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  @Input() album!: Album;
  @Output() deleteAlbum: EventEmitter<Album> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      todo: true,
    };
    return classes;
  }

  onDelete(album: any) {
    this.deleteAlbum.emit(album);
  }

  onRef(album: any) {
    sessionStorage.setItem('albumId', album.id);
    window.location.href = '/photos';
  }
}
