import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../services/super-hero';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeroCard } from '../../heroes/components/hero-card/hero-card';
import { Favorites } from '../../services/favorites';
@Component({
  selector: 'app-home-page',
  imports: [MatGridListModule, HeroCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  heroes: any[] = [];

  constructor (private superHero: SuperHero, private favoritesServide: Favorites) {}

  ngOnInit() {
    const ids: number[] = this.generateRdmIds(20);
    ids.forEach(id => {
      this.superHero.getHeroesById(id).subscribe(hero => {
        console.log(hero);
        this.heroes.push(hero)
      });
    });
  }

  onFavorite(hero: any) {
    this.favoritesServide.addFavorite(hero);
  }

  generateRdmIds(n: number): number[] {
    var arr: number[] = [];
    while (arr.length < n) {
      const num = Math.floor(Math.random() * 100) + 1;
      if (!arr.includes(num)){
        arr.push(num);
      }        
    }
    return arr;
  }
}
