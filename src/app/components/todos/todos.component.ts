import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  isloadingtodo: boolean = true;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      setTimeout(() => {
        this.isloadingtodo = false;
        this.todos = todos;
      },800)
    });
  }

  deleteTodo(todo:Todo) {
    // console.log(todo);
    this.todos = this.todos.filter(todoItem => todoItem.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
