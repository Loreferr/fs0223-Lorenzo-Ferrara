import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  apiUrl:string = 'http://localhost:3000/todos';

  AllTodos:Todos[] = [];

  constructor() { }
  getTodos():Promise<Todos[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  addTodos(goal:Todos):Promise<Todos>{
    return fetch(this.apiUrl,{
      method:'post',//gli ndico che voglio creare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(goal)
    }).then(response => response.json());
  }

  updateTodos(goal:Todos){
    goal.completed = true
    fetch(this.apiUrl+'/'+goal.id,{
      method:'PUT',//gli ndico che voglio aggiornare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(goal)
    }).then(response => response.json());
  }

  deleteTodo(todo:Todos){
    fetch(this.apiUrl+'/'+todo.id,{
      method:'DELETE',//indico che voglio eliminare
    }).then(response => response.json());
  }

}
