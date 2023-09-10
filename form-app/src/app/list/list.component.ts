import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  taskList: any
  hideList = false
  intervalId: any;
  task_var : any
  tasks : any  [];
  constructor(public sharedArray: SharedServiceService) {
   this.tasks = []
  }

 
  

  ngOnInit(): void {

    this.intervalId = setInterval(() => {
      this.task_var = this.sharedArray.get_array()
      // console.log("outside interval",this.hideList);
      if(this.task_var.length != 0){
        this.hideList=true
      }
     
      if(this.hideList != false && this.task_var != ''){
        // this.hideList = true
        console.log("inside interval", typeof(this.task_var.task));
        if(this.task_var.task != null){
        this.tasks.push(this.task_var.task);
        this.sharedArray.refresh_input();
        // console.log("data entered");
        
        }

        // console.log("aasd")
      }
      // console.log('Counter:', this.tasks);
    }, 1000); // Interval in milliseconds (e.g., 1000ms = 1 second)
  
    
    // console.log('oninit',this.tasks);
    
  }
 
  Strike(task:any,index:any){
    this.taskList  = document.getElementById(task+'-'+index)
    // console.log(this.taskList)
    if(this.taskList){
    
      if( this.taskList.style.textDecoration == "line-through"){
        this.taskList.style.textDecoration = "none"
      }else{
      this.taskList.style.textDecoration = "line-through"
      }
    }

  }
  resetList(){
    this.sharedArray.reset_array()
    this.tasks= []
    this.hideList = false
  }
}


