import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  
  quotes:Quote[]=[
    {saying:'The minority have a say but the majority have their way' ,author:'Dr Opiyo'},
    {saying:'The greatest glory in living lies not in never falling, but in rising every time we fall',author:'Nelson Mandela'},
    {saying:'The way to get started is to quit talking and begin doing',author:'Walt Disney'},

    
  ];
  
  }
