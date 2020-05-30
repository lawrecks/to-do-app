import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic class

  setClasses() {
    let classes = {
      todo:true,
      completed : this.todo.completed
    };

    return classes;
  }

  toggleComplete(todo):void {
    todo.completed = !todo.completed;
    this.todoService.toggleComplete(todo).subscribe(t => {
      // console.log(todo);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
