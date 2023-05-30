import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-postsattivi',
  templateUrl: './postsattivi.component.html',
  styleUrls: ['./postsattivi.component.css']
})
export class PostsattiviComponent {
  postArray: Post[] = [];


  constructor(private postSvc:PostsService){

    this.postSvc.getAllPosts().then(post => {
      //una volta ricevuti i post dal server, vado a filtrare, ottenendo un array contenente i soli post con la proprietà active == true
      let postTrue = post.filter(p => p.active);


      this.postArray = postTrue

    })

  }
}
