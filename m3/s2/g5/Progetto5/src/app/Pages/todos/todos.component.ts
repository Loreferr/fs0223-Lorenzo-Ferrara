import { Component } from '@angular/core';
import { TodoSClass } from 'src/app/todo-sclass';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  Todo:TodoSClass = new TodoSClass('',false );

  Todos:Todos[] = [];
  loading:boolean = true;
  constructor(private TodosSvc:TodosService){}
  ngOnInit(){

    this.getTodos();

  }
 TodoFiltered:Todos[] = []
  getTodos(){
    this.TodosSvc.getTodos().then(goalResponse =>{

      this.Todos = goalResponse;
      this.loading = false;
      this.TodoFiltered = goalResponse.filter((item) => item.completed == false);


    })

  }

  AddTodos() {
    this.TodosSvc.addTodos(this.Todo)
    setTimeout(() => {
      this.getTodos()
    }, 500);


  }

  updateTodos(Todo:TodoSClass){
    this.TodosSvc.updateTodos(Todo)
    setTimeout(() => {
      this.getTodos()
    }, 500);


    /*.then(goalResponse =>{goalResponse.completed = !goalResponse.completed
    this.getTodos()
  })*/

}}
