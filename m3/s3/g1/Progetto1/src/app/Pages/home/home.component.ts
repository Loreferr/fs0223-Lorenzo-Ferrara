import { Component } from '@angular/core';
import { Card } from 'src/app/card';
import { CardServiceService } from 'src/app/card-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor( private cardsvc:CardServiceService){}

  cardArr:Card[] = [];
  LikeArray:Card[] = [];


  ngOnInit(): void {

    this.cardsvc.get().subscribe(res => {//mi iscrivo all'observable
      this.cardArr = res;

    })



}
pushLike(card:Card){
  this.LikeArray.push(card);
}

deleteCard(card:Card){
  this.cardArr.splice(this.cardArr.indexOf(card),1);
  ;

}}
