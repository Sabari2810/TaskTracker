import { Component, OnInit } from '@angular/core';
import { Subscription ,Observable} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : String =  "Task-Tracker";
  showAddForm:boolean = false;
  subscription: Subscription = new Subscription;
  constructor(private uiService:UiService) { 
    this.uiService.toggleAddForm().subscribe((value)=>
    this.showAddForm = value);
  }

  ngOnInit(): void {
  }

  addTask(){
    this.uiService.showAddTask()
  }

}
