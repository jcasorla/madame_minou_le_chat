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
  count = 0;
  display;
  imgArr = ["/assets/img/dreamstime_xs_3.jpg", "/assets/img/cuteLook.jpg", "/assets/img/crazy.jpg", "/assets/img/bandana.jpg", "/assets/img/whiskers.jpg", "/assets/img/butterfly.jpg", "/assets/img/adorable.jpg", "/assets/img/roar.jpg", "/assets/img/nap.jpg"];
  currentImg = this.imgArr[this.count]
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
    console.log("In take", this.hand)
    this.count = (this.count+1)%this.imgArr.length;
    this.currentImg = this.imgArr[this.count];
    if (this.count == 8){
      this.display = "true";
    }
    console.log(this.imgArr, "I'm imgArr array");
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









 