import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showTask:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  showAddTask(): void{
    this.showTask = !this.showTask;
    this.subject.next(this.showTask);
  }

  toggleAddForm(): Observable<any>{
    return this.subject.asObservable();
  }


}
