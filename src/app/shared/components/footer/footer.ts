import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
