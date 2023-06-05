import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http:HttpClient) { }
  ApiUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  get(){
    return this.http.get<Card[]>(this.ApiUrl);
  }

  delete(id:number){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/users/'+ id dell'utente da eliminare
    return this.http.delete(this.ApiUrl + '/' + id);
  }
}
