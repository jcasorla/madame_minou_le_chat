import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../reading.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Deck } from '../modules/deck';

@Component({
  selector: 'app-home',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  hand=[];
  yourCard;
  yourCardImg;
  yourReading;

  deck= new Deck();

  

  constructor(
    private _readingService: ReadingService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._readingService.readings$.subscribe(reading => {
      this.yourReading = reading;
    })

    this._readingService.hand$.subscribe(hand => {
      this.yourCardImg = hand;
    })
  }

  take(){
    this.hand.push(this.deck.deal());
}



discard(a,b){
    this.hand.splice(a,b);

}
showHand(){
    let i=0;
    let card;

    for (i; i<this.hand.length; i++){
        card= this.hand[i].getRank()+ " "+ this.hand[i].getSuit();
        this.yourCard=card;
        
    }
}
read(){
    this.take();
    this.showHand();
    console.log(this.yourCard);

    this._readingService.hand(this.yourCard);
    this._readingService.readings(this.yourCard);
    

}

shuffle(){
  this.deck.reset();
  this.deck.shuffle();
  this.yourCard=null;
}

}









 