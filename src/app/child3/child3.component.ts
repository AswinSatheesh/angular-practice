import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  constructor() { }


  // myName : string = "Aswin";
  @Output() valuefromchild : EventEmitter<String> = new EventEmitter<String>();
  fufu(val : any){
    this.valuefromchild.emit(val)
  }
  
}
