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
    new Quote ("Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking","Steve Jobs",34,67),
    new Quote ('If life were predictable it would cease to be life, and be without flavor','Eleanor Roosevelt',33,67),
    new Quote ("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",'Oprah Winfrey',33,67),
    new Quote ("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",'James Cameron',33,67),
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
