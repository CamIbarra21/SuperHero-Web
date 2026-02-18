import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { FavoritesPage } from './favorites-page/favorites-page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'favorites', component: FavoritesPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
