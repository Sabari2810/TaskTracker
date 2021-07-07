import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: String;
  day!: String;
  reminder: boolean = false;
  showAddForm:boolean = false;

  @Output() addTask:EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService) { 
    this.uiService.toggleAddForm().subscribe((value)=>
    this.showAddForm = value);
  }

  ngOnInit(): void {
  }

  submitTask(){
    if(!this.text){
      alert("Please enter a task name");
      return;
    }

    const task = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.addTask.emit(task);

    this.text = ""
    this.day = ""
    this.reminder = false
  }

}
