import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-practice';

  // price : string = 'Ten';

  items = ['item1', 'item2','item3'];
  valueFromChild(value : any){
    this.items.push(value);
  }

  valuefromchild : string = '';
  valuefromchild3(val : any){
    this.valuefromchild = val;
    console.log(this.valueFromChild);
    
  }
}
