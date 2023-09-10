import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
 sharedArray: any = ''
 resetFlag = 0
  constructor() {
   }
  
 
  set_array(array_task:String){ 
    // console.log('test',array_task);
    // this.sharedArray.push(array_task)
    this.sharedArray = array_task
  }
  get_array(){
    if(this.resetFlag == 0  ){
        //  console.log('get array if',this.sharedArray);
        return this.sharedArray
      }else{
        // console.log('get array else');
        
      this.sharedArray = ''
      this.resetFlag = 0
      return this.sharedArray
      
    }
    
  }

  reset_array(){
    // console.log("I am resetting")
    this.resetFlag = 1;
  }
  refresh_input(){
    this.sharedArray = ''
  }
    
}
