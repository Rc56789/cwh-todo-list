import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localItem: string;
  constructor() { 
    this.localItem = String(localStorage.getItem("todos"));
    if(this.localItem == null)
    {
    this.todos = [];
    }
    else{   
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo); //Taking index
    this.todos.splice(index,1)  //increment by one
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo); //Taking index
    this.todos[index].active = !this.todos[index].active; //increment by one
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
