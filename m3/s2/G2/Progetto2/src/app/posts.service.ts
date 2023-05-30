import { Injectable } from '@angular/core';
import { Post } from './Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl:string = 'assets/db.json';


  constructor() { }

  getAllPosts():Promise<Post[]> {
   return fetch(this.apiUrl).then(res => res.json());
  }
}
