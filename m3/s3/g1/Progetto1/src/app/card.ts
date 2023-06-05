export class Card {
  albumId: string;
  id:number = 0;
  title:string ;
  url:string
  thumbnailUrl:string

  constructor(albumId:string,id:number, title:string, url:string, thumbnailUrl:string){
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;

  }

}
