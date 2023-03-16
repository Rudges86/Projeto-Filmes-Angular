import { ErrorComponent } from './pages/error/error.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent },
  {path:"filmes/:id", component:FilmesComponent},
  {path:"favoritos", component:FavoritosComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
