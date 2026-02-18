import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuperHero {
  private baseApiUrl = "https://superheroapi.com/api/7ab241d7a8fd0da9f70f4f645fa28bc3";

  constructor (private http:HttpClient) {}

  getHeroesById(id: number) {
    return this.http.get(`/api/${id}`);
  }
}
