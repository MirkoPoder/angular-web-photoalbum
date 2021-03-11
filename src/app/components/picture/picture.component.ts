import { Component, Input, OnInit } from '@angular/core';
import { PictureService } from '../../services/picture.service';
import { Picture } from 'src/app/models/Picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})
export class PictureComponent implements OnInit {
  @Input() picture!: Picture;

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {};
    return classes;
  }
}
