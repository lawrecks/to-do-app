import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Todo} from 'src/app/models/Todo';

const httpOptions = {
  headers : new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit:string = '?_limit=10'

  constructor(private http:HttpClient) { }
  
  //get all todos
  getTodos ():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl+this.todoLimit);
  }

  //toggle complete
  toggleComplete(todo: Todo):Observable<any> {
    const url = this.todoUrl+'/'+todo.id;
    return this.http.put(url, todo, httpOptions);
  }

  //delete todo
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = this.todoUrl+'/'+todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
