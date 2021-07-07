import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => 
    (this.tasks = res));
  }

  deleteTask(task:Task){
    this.taskService.deleteTasks(task).subscribe(() => (
      this.tasks = this.tasks.filter((t) => t.id != task.id)
    ));
  }

  onToggleReminder(task : Task){
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  addNewTask(task : Task){
    this.taskService.addNewTask(task).subscribe((task)=>
    (this.tasks.push(task))
    );
  }

}
