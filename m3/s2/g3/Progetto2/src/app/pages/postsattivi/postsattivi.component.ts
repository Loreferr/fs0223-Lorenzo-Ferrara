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



}}
