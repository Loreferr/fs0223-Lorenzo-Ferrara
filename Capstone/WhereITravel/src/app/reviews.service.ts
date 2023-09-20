import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/reviews';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postReview(reviewData: any, authToken: string): Observable<any> {
    // Configura le intestazioni per includere il token di autenticazione
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      }),
    };

    // Esegui la richiesta POST all'endpoint API corretto
    const addReviewUrl = `${this.apiUrl}/add`; // Aggiungi '/add' all'URL
    return this.http.post(addReviewUrl, reviewData, httpOptions);
  }




  convertRatingToStars(rating: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆';
    }
    return stars;
  }
}

