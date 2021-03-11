import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css'],
})
export class AddAlbumComponent implements OnInit {
  @Output() addAlbum: EventEmitter<any> = new EventEmitter();

  title!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const album = {
      title: this.title,
      userId: sessionStorage.getItem('id'),
    };
    this.addAlbum.emit(album);
  }
}
