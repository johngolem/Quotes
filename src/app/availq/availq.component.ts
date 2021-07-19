import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-availq',
  templateUrl: './availq.component.html',
  styleUrls: ['./availq.component.css']
})
export class AvailqComponent implements OnInit {
  [x: string]: any;


  quotes:Quote[]=[
    new Quote('The minority have a say but the majority have their way' ,'Dr Opiyo',41, 23),
    new Quote ('The greatest glory in living lies not in never falling, but in rising every time we fall','Nelson Mandela',12, 21),
    new Quote ('The way to get started is to quit talking and begin doing','Walt Disney',33,67),
  ];
  
      
  addNewQuote(quote: Quote){
    this.quotes.push(quote)
  }    
  
  toggleDetails(index:any){
    this.quotes[index].showVotes = !this.quotes[index].showVotes;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
