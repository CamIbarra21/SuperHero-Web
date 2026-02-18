import { Component, OnInit } from '@angular/core';
import { Favorites } from '../../services/favorites';
import { HeroCard } from '../../heroes/components/hero-card/hero-card';

@Component({
  selector: 'app-favorites-page',
  imports: [HeroCard],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage implements OnInit {

  favorites: any[] = [];

  constructor (private favoriteService: Favorites) {}

  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe(favs => {
      this.favorites = favs;
    });  
  }

  onDeleteHero(heroId: number) {
    this.favoriteService.removeFavorite(heroId);
  }
}
