import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { FavoritesPage } from './favorites-page/favorites-page';
import { UserAccount } from './user-account/user-account';
import { UpdateAccount } from './update-account/update-account';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'favorites', component: FavoritesPage},
  { path: 'account', component: UserAccount},
  { path: 'account/update', component: UpdateAccount}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
