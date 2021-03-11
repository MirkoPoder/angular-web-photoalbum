import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlbumComponent } from './components/album/album.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { FormsModule } from '@angular/forms';
import { PictureComponent } from './components/picture/picture.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { PictureService } from './services/picture.service';
import { LogfileComponent } from './components/logfile/logfile.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AlbumsComponent,
    HeaderComponent,
    FooterComponent,
    AlbumComponent,
    AlbumsComponent,
    AddAlbumComponent,
    PictureComponent,
    PicturesComponent,
    LogfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PictureService],
  bootstrap: [AppComponent],
})
export class AppModule {}
