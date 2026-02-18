import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Favorites {
  private favorites: any[] = [];
  private favorites$ = new BehaviorSubject<any[]>([])

  addFavorite(hero: any) {
    this.favorites.push(hero);
    this.favorites$.next(this.favorites);
  }

  removeFavorite(id: number) {
    this.favorites = this.favorites.filter(hero => hero.id != id);
    this.favorites$.next(this.favorites);
  }

  getFavorites(): Observable<any[]> {
    return this.favorites$.asObservable();
  }
}
