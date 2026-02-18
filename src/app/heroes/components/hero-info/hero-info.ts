import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-hero-info',
  imports: [],
  templateUrl: './hero-info.html',
  styleUrl: './hero-info.css',
})
export class HeroInfo {
  private _infoSheetRef = inject<MatBottomSheetRef<HeroInfo>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._infoSheetRef.dismiss();
    event.preventDefault();
  }

}
