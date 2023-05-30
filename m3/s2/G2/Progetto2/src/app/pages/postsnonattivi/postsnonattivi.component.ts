import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-postsnonattivi',
  templateUrl: './postsnonattivi.component.html',
  styleUrls: ['./postsnonattivi.component.css']
})
export class PostsnonattiviComponent {

  postArrayF: Post[] = [];

  constructor(private postSvc:PostsService){

    this.postSvc.getAllPosts().then((post: any[]) => {
      //una volta ricevuti i post dal server, vado a filtrare, ottenendo un array contenente i soli post con la proprietà active == true
      ;
      let postFalse = post.filter(p =>!p.active);


      this.postArrayF = postFalse
    })

  }

}
