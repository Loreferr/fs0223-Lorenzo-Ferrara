import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ReviewService } from 'src/app/reviews.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

  constructor(private modalService: NgbModal, private http: HttpClient ,private route: ActivatedRoute,private el: ElementRef, private reviewService: ReviewService) {}

  reviews: any[] = [];
  maxDescriptionLength: number = 300;
  currentUsername: string | null = null;
  faStar = faStar;
  showDeleteButton: boolean = false;
  city: string = '';
  reviewId: number | null = null;



  UpdatedReviewData: any = {
    city: '', // string
    description: '', // string
    rating: 0, // numero (puoi inizializzarlo a 0, ad esempio)
  };


  ngOnInit() {

    this.reviewService.getReviews().subscribe((data) => {
      this.reviews = data;


      this.reviews = this.reviews.slice(-6);

      for (const review of this.reviews) {
        review.displayedDescription = review.description.slice(0, this.maxDescriptionLength);
        review.showFull = false; // Inizialmente nascondi la descrizione completa
      }
    });




      const storedUsername = localStorage.getItem('username');
  if (storedUsername !== null) {
    this.currentUsername = storedUsername;
  }



}

getReviewsByCity() {
  this.reviewService.getReviewsByCity(this.city).subscribe(
    (data) => {
      // Aggiorna la variabile reviews con le recensioni filtrate
      this.reviews = data;
    },
    (error) => {
      console.error('Errore durante il recupero delle recensioni per città:', error);
    }
  );
}



filterReviewsByAuthor() {
  // Recupera l'autore dalle informazioni memorizzate nel localStorage
  const author = localStorage.getItem('username');
  console.log(author);
   // Assicurati che la chiave sia corretta

  if (author) {
    // Se è stato trovato un autore nel localStorage
    // Chiamiamo il servizio di recensioni per ottenere solo le recensioni di quell'autore
    this.reviewService.getReviewsByAuthor(author).subscribe(
      (reviews) => {
        // Gestisci le recensioni filtrate qui, ad esempio, aggiorna la tua variabile di reviews
        this.reviews = reviews;
        this.showDeleteButton = reviews.length > 0;
      },
      (error) => {
        console.error('Errore durante il recupero delle recensioni:', error);
      }
    );
  }
}

deleteReview(reviewId: number) {
  const authToken = localStorage.getItem('authToken'); // Assicurati di avere il token corretto

  if (authToken) {
    // Invia una richiesta per eliminare la recensione utilizzando l'ID e il token di autenticazione
    this.reviewService.deleteReview(reviewId, authToken).subscribe(
      () => {
        // La recensione è stata eliminata con successo, ora recupera le recensioni dell'autore

      },
      (error) => {
        console.error("Errore durante l'eliminazione della recensione:", error);
        this.filterReviewsByAuthor();
      }
    );
  }

}

updateReview(reviewId: number, updatedData: any) {
  const authToken = localStorage.getItem('authToken'); // Ottieni il token

  if (authToken) {
    // Invia una richiesta HTTP PUT al server con i dati aggiornati
    this.reviewService.updateReview(reviewId, updatedData, authToken).subscribe(
      (response) => {
        // Gestisci la risposta dal server o aggiorna la vista come necessario
        console.log('Recensione aggiornata con successo:', response);
      },
      (error) => {
        console.error('Errore durante l\'aggiornamento della recensione:', error);
      }
    );
  }
}




loadAllReviews() {
  this.reviewService.getReviews().subscribe(
    (data: any[]) => {
      this.reviews = data;
      this.showDeleteButton = false;
    },
    (error) => {
      console.error('Errore durante il recupero di tutte le recensioni:', error);
    }
  );
}


openVerticallyCentered(content: any) {
  this.modalService.open(content, { centered: true });

  document.body.classList.add('no-scroll');
}



getStars(rating: number): any[] {
  const stars: any[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(faStar); // Icona stella piena
    } else {
      stars.push(faStar); // Icona stella vuota
    }
  }
  return stars;
}
}
