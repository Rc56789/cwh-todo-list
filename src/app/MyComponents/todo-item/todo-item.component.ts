import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor() { }
  @Input() todo: Todo;
  @Input() i: number;
   //Accept a input of todo object 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

//Delete Button
  onClick(todo: Todo){
    this.todoDelete.emit(todo);   //Event Called and todo object passed
    console.log("OnClick Has been Triggered");
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}
