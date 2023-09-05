import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ImageData } from '../../Interfaces/image-data'; // Use correct relative path



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {




  backgroundImages: string[] = [];



  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiKey = 'WWhWpB_gDB34rU2Nzj2XJKLoaGrSCgfIfqeCSsjIjgs';
    const apiUrl = `https://api.unsplash.com/photos/random?count=1&client_id=${apiKey}&query=travel&orientation=landscape&width=2500`;

    this.http.get<ImageData[]>(apiUrl) // Usiamo il tipo ImageData[]
      .subscribe((data: ImageData[]) => { // Tipo corretto per i dati
        // Estrai gli URL delle immagini e assegnali a backgroundImages
        this.backgroundImages = data.map(image => image.urls.regular);
      });






}}

