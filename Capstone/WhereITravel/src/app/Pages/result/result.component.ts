import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Review } from 'src/app/Interfaces/reviews';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  reviews: Review[] = [
    { author: 'Utente 1', comment: 'Ottimo posto!' },
    { author: 'Utente 2', comment: 'Molto suggestivo.' },
    // ... altre recensioni
  ];
destination: string = '' ;
description: string = '' ;
interests: string[] = [];
images: string[] = [];
interestImages: Record<string, string> = {};







ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.destination = params['destination'];
    this.description = params['description'];
    this.interests = params['interests']
    if (this.destination) {
      // Esegui la richiesta HTTP per ottenere le immagini basate sulla destinazione
      this.getImagesFromUnsplash(this.destination);
    }
    if (this.interests && this.interests.length > 0) {
      // Carica le immagini dai luoghi di interesse
      this.getInterestFromUnsplash(this.interests);
    }
  });
}
/*images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/2000/800`);*/
paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (
    this.unpauseOnArrow &&
    slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  ) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}






// Funzione per ottenere le immagini da Unsplash
getImagesFromUnsplash(destination: string) {

  const apiKey = 'WWhWpB_gDB34rU2Nzj2XJKLoaGrSCgfIfqeCSsjIjgs';
  const apiUrl = `https://api.unsplash.com/photos/random?count=5&client_id=${apiKey}&query=${destination}&orientation=landscape`;

  this.http.get<any[]>(apiUrl).subscribe(
    (data: any[]) => {
      this.images = data.map(image => image.urls.regular);


    },
    (error) => {
      console.error('Errore durante il recupero delle immagini:', error);
    }
  );

}

getInterestFromUnsplash(placesOfInterest: string[]) {
  const apiKey = 'WWhWpB_gDB34rU2Nzj2XJKLoaGrSCgfIfqeCSsjIjgs';

  placesOfInterest.forEach((place) => {
    const apiUrl = `https://api.unsplash.com/photos/random?count=1&client_id=${apiKey}&query=${place}&orientation=landscape`;

    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        const imageUrl = data[0].urls.regular;
        this.interestImages[place] = imageUrl;
      },
      (error) => {
        console.error(`Errore durante il recupero delle immagini per ${place}:`, error);
      }
    );
  });
}

openImageInDetail(imageUrl: string) {
  window.open(imageUrl, '_blank');
}








}
