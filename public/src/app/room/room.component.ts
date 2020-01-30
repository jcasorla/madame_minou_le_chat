import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../reading.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Deck } from '../modules/deck';
// import { Read } from '../models/read';

@Component({
  selector: 'app-home',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {



reads = [];
myread = {card : '', reading: ''};
kount = 8;

  hand=[];
  yourCard;
  yourCardImg;
  yourReading;
  count = 0;
  display;
  // imgArr = ["/assets/img/dreamstime_xs_3.jpg", "/assets/img/crazy.jpg", "/assets/img/bandana.jpg", "/assets/img/whiskers.jpg", "/assets/img/butterfly.jpg", "/assets/img/adorable.jpg", "/assets/img/roar.jpg", "/assets/img/nap.jpg"];

  imgArr = ["url('/assets/img/dreamstime_xs_3.jpg')", "url('/assets/img/crazy.jpg')", "url('/assets/img/bandana.jpg')", "url('/assets/img/whiskers.jpg')",   "url('/assets/img/butterfly.jpg')", "url('/assets/img/adorable.jpg')", "url('/assets/img/roar.jpg')", "url('/assets/img/nap.jpg')"];
  currentImg = this.imgArr[this.count]
  deck= new Deck();


 parentVar: any; myevent = '';

  constructor(
    private _readingService: ReadingService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._readingService.readings$.subscribe(reading => {
      this.yourReading = reading;
    });

    this._readingService.hand$.subscribe(hand => {
      this.yourCardImg = hand;
    });


  }
  displayImg(){
    return this.currentImg;
  }

  take(){
    this.hand.push(this.deck.deal());
    this.count = (this.count+1)%this.imgArr.length;
    this.currentImg = this.imgArr[this.count];
    if (this.count == 7){
      this.display = "true";
    }
}


  discard(a,b) {
      this.hand.splice(a,b);

  }
  showHand() {
      let i = 0;
      let card;

      for (i; i < this.hand.length; i++){
          card = this.hand[i].getRank() +  " " + this.hand[i].getSuit();
          this.yourCard = card;

      }
  }
  read() {

      if (this.hand.length > 51){
        this.reset();
        this.shuffle();
      }

      if (this.reads.length > 7) {
        this.onPurge();
      }

      this.take();
      this.showHand();

      this._readingService.hand(this.yourCard);
      this._readingService.readings(this.yourCard);
      this.kount--;
      this.onCreate();

  }

  shuffle() {
    this.deck.shuffle();
    this.yourCard = null;
  }

  reset(){
    this.deck = new Deck();
    this.hand = [];
  }

    onCreate() {
    this.myread = {card: this.yourCard, reading: this.yourReading};

    this._readingService.createRead(this.myread).subscribe(createdRead => {
      this.reads = [...this.reads, createdRead];
    });
  }

  dataFromChild(eventData) {
    this.parentVar = null;
    this.myevent = eventData;
    console.log('event data from child:', eventData);

  }

  onPurge() {
      for ( let i=0; i < this.reads.length; i++ ) {

        console.log(this.reads);

        const obs = this._readingService.removeRead(this.reads[i].id);
        obs.subscribe(data => {
        });
      }
      this.reads = [];


  }

}








