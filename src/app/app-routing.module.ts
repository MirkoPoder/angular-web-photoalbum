import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { UsersComponent } from './components/users/users.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { LogfileComponent } from './components/logfile/logfile.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PicturesComponent },
  { path: 'logfile', component: LogfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
