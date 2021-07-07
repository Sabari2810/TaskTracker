import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private url = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  httpoptions = {
    headers : new HttpHeaders({
      'Content-type' : 'Application/Json',
    }),
  }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  deleteTasks(task : Task): Observable<Task>{
    const url = this.url+"/"+task.id;
    console.log(url);
    return this.http.delete<Task>(url);
  }

  updateReminder(task :Task) : Observable<Task>{
    const url = this.url+"/"+task.id;
    return this.http.put<Task>(url,task,this.httpoptions);
  }

  addNewTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.url,task,this.httpoptions);
  }

}
