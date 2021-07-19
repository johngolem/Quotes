import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotef',
  templateUrl: './quotef.component.html',
  styleUrls: ['./quotef.component.css']
})
export class QuotefComponent implements OnInit {
  newQuote = new Quote ('','',0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
