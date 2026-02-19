import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SH_web_Ang');

  actualRoute: string = '';
  
  constructor (private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.actualRoute = event.urlAfterRedirects;
    })
  }
}
