import { Component, inject, OnInit } from '@angular/core';
import { Favorites } from '../../services/favorites';
import { HeroCard } from '../../heroes/components/hero-card/hero-card';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HeroInfo } from '../../heroes/components/hero-info/hero-info';

@Component({
  selector: 'app-favorites-page',
  imports: [HeroCard, MatBottomSheetModule],
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

  private _infoBottomSheet = inject(MatBottomSheet);

  infoBottomSheet(heroId: number): void {
    this._infoBottomSheet.open(HeroInfo);
  }
}
