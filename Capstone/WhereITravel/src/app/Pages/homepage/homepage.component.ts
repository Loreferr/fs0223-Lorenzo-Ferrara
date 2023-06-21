import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  backgroundImages: string[] = [

    'url(../../../../../assets/img/timur-garifov-DdIDRN3Fw2A-unsplash.jpg)',
    'url(../../../../../assets/img/willian-justen-de-vasconcellos-4hMET7vYTAQ-unsplash.jpg)',
    'url(../../../../../assets/img/luca-bravo-TaCk3NspYe0-unsplash.jpg)',
    'url(../../../../../assets/img/chris-czermak-7ybKmhDTcz0-unsplash.jpg)',
    'url(../../../../../assets/img/leonard-cotte-R5scocnOOdM-unsplash.jpg)',
    // Aggiungi gli URL delle immagini aggiuntive
  ];
  randomBackgroundImage: string = '';

  ngOnInit() {
    this.randomBackgroundImage = this.getRandomBackgroundImage();
  }

  getRandomBackgroundImage(): string {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    return this.backgroundImages[randomIndex];
  }
}

