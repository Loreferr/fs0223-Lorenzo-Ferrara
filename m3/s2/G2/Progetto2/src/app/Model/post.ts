export class Post {
  id: number;
  title: string;
  body: string;

  constructor(id:number,title: string, body:string) {
      this.title = title;
      this.body = body;
      this.id = id;
    }
}
