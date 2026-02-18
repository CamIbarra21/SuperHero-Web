import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../services/super-hero';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-home-page',
  imports: [MatGridListModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  heroes: any[] = [];

  constructor (private superHero: SuperHero) {}

  ngOnInit() {
    const ids: number[] = this.generateRdmIds(20);
    ids.forEach(id => {
      this.superHero.getHeroesById(id).subscribe(hero => {
        console.log(hero);
        this.heroes.push(hero)
      });
    });
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
