import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input () quote:Quote;
 
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
