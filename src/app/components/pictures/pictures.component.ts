import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../../models/Picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
})
export class PicturesComponent implements OnInit {
  pictures: Picture[] | undefined;

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.pictureService.getPictures(Picture.albumId).subscribe((pictures) => {
      this.pictures = pictures;
    });
  }
}
