export class Post {
  id: number;
  title: string;
  body: string;
  active: boolean

  constructor(id:number,title: string, body:string, active:boolean) {
      this.title = title;
      this.body = body;
      this.id = id;
      this.active = active;
    }
}
