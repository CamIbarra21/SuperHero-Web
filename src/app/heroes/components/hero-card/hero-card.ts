import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCard {
  @Input() hero: any;

  @Output() favorite = new EventEmitter<any>();

  addFavorite() {
    this.favorite.emit(this.hero);
  }

  getOtherHero() {
    
  }
}
