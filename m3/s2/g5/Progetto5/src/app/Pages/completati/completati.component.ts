import { Component } from '@angular/core';
import { TodoSClass } from 'src/app/todo-sclass';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent {
  Todo:TodoSClass = new TodoSClass('',false );

  Todos:Todos[] = [];
  loading:boolean = true;
  constructor(private TodosSvc:TodosService){}
  ngOnInit(){

    this.getTodos();

  }
 TodoFilteredTrue:Todos[] = []
  getTodos(){
    this.TodosSvc.getTodos().then(goalResponse =>{

      this.Todos = goalResponse;
      this.loading = false;
      this.TodoFilteredTrue = goalResponse.filter((item) => item.completed == true);


    })

  }

  AddTodos(){
    this.TodosSvc.addTodos(this.Todo).then(res => this.getTodos())


  }

  updateTodos(Todo:TodoSClass){
    this.TodosSvc.updateTodos(Todo)

    /*.then(goalResponse =>{goalResponse.completed = !goalResponse.completed
    this.getTodos()
  })*/

}
Deleteto(Todo:Todos){
  this.TodosSvc.deleteTodo(Todo)
  setTimeout(() => {
    this.getTodos()
  }, 500);



}
}
