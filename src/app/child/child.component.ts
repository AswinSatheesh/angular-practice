import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input()
  // amount : string = "hundred";
@Output() userEnterVal = new EventEmitter<String>();

onClick(val : any){
  this.userEnterVal.emit(val);
  console.log(val);
  
}
}
