export class Post {
  id: number;
  title: string;
  body: string;
  active: boolean;
  type:string

  constructor(id:number,title: string, body:string, active:boolean, type:string) {
      this.title = title;
      this.body = body;
      this.id = id;
      this.active = active;
      this.type = type;
    }
}
