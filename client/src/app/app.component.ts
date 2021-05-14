import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Arrya';

  //String intipulation
  servername='Apollo';
  serverid=11;
  serverstatus='offline';
  statusflag=false;
  buttonstate=true;

  constructor(){
    setTimeout(() => {
      this.buttonstate=false;
    }, 2500);
  }

  toggleserver(){
    this.statusflag=!this.statusflag
    if(this.statusflag=== true){
      this.serverstatus='online';
    }
    else{
      this.serverstatus='offline';
    }
    return this.serverstatus;
  }

  flag=true;
  toggleflag(){
    this.flag=!this.flag;
    return this.flag;
  }
  getcolor(){
    if(this.flag===true)
    return 'green';
      else{
        return 'red';
      }
  }

  student = ['Aaa','Bbb','Cccc'];
  currentnm='';
  add(){
    this.student.push(this.currentnm);
  }

  // Assignment
  flag1=false;
  counter=0;
 
  togglepara(){
    if(this.flag1=!this.flag1)
    return this.flag1;
    this.counter++;
  }
  show(){
  if(this.counter===5)
  return 'green';
}

  
}
