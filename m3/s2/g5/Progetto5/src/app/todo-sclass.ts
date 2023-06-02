import { Todos } from "./todos";

export class TodoSClass implements Todos {
  id?: number | undefined;
  title: string;
  completed: boolean;

  constructor( title: string, completed: boolean, id?: number | undefined ) {

    this.title = title;
    this.completed = completed;
    this.id = id
  }
}
