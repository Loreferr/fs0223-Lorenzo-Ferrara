import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/Interfaces/reviews';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {



  reviews: Review[] = [
    { author: 'Utente 1', comment: 'Ottimo posto!' },
    { author: 'Utente 2', comment: 'Molto suggestivo.' },
    // ... altre recensioni
  ];
destination: string = '' ;


  constructor(private route: ActivatedRoute) {}



ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.destination = params['destination'];
  });

}}
