import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:string[];
  
  
constructor(){
  
  this.quotes= ['The minority have a say but the majority have their way','The greatest glory in living lies not in never falling, but in rising every time we fall','The way to get started is to quit talking and begin doing.']


}

}
