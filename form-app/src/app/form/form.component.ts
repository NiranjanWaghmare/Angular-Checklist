import { Component, EventEmitter, Output } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formSubmitted = false;
  isdisabled = true

  task: any
   task_array:string[] = [];
  constructor (private Sharedarray : SharedServiceService){

  }

  enableSubmit(x:any){
    console.log("test",x);
    
    if(x.valid == true){
      this.isdisabled = false
    }else{
      this.isdisabled = true
    }
  }

  Submit_task(x: String){
    console.log(x);
    if(x != null){
      console.log('Submit', x);
      
      this.Sharedarray.set_array(x);
      this.isdisabled = true
      // this.task_array.push(x['task']);
    }
      
    
      

       
  }

}
