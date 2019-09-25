import { Component, OnInit } from '@angular/core';
// import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Deck } from '../modules/deck';

@Component({
  selector: 'app-home',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  hand=[];
  
  youCard;
  youCardImg;
  yourReading;

  deck= new Deck();

  yourHand={
    //Hearts
    "Ace Hearts": "AH",
    "Two Hearts": "2H",
    "Three Hearts": "3H",
    "Four Hearts": "4H",
    "Five Hearts": "5H",
    "Six Hearts": "6H",
    "Seven Hearts": "7H",
    "Eight Hearts": "8H",
    "Nine Hearts": "9H",
    "Ten Hearts": "10H",
    "Jack Hearts": "JH",
    "Queen Hearts": "QH",
    "King Hearts": "KH",

    //Clubs
    "Ace Clubs": "AC",
    "Two Clubs": "2C",
    "Three Clubs": "3C",
    "Four Clubs": "4C",
    "Five Clubs": "5C",
    "Six Clubs": "6C",
    "Seven Clubs": "7C",
    "Eight Clubs": "8C",
    "Nine Clubs": "9C",
    "Ten Clubs": "10C",
    "Jack Clubs": "JC",
    "Queen Clubs": "QC",
    "King Clubs": "KC",

    //Diamonds
    "Ace Diamonds": "AD",
    "Two Diamonds": "2D",
    "Three Diamonds": "3D",
    "Four Diamonds": "4D",
    "Five Diamonds": "5D",
    "Six Diamonds": "6D",
    "Seven Diamonds": "7D",
    "Eight Diamonds": "8D",
    "Nine Diamonds": "9D",
    "Ten Diamonds": "10D",
    "Jack Diamonds": "JD",
    "Queen Diamonds": "QD",
    "King Diamonds": "KD",

    //Spades
    "Ace Spades": "AS",
    "Two Spades": "2S",
    "Three Spades": "3S",
    "Four Spades": "4S",
    "Five Spades": "5S",
    "Six Spades": "6S",
    "Seven Spades": "7S",
    "Eight Spades": "8S",
    "Nine Spades": "9S",
    "Ten Spades": "10S",
    "Jack Spades": "JS",
    "Queen Spades": "QS",
    "King Spades": "KS",

  }
  readings={
    //Hearts
    "Ace Hearts": "Know where your going, and dont get lost",
    "Two Hearts": "Loyalty will be meowy rewarded",
    "Three Hearts": "You don't have to be able to bark to be the toughest dog in town",
    "Four Hearts": "Your gut is powerful... follow your instincts and dreams even if they take you beyond the cat flap! Don't let your tail get in between your paws!",
    "Five Hearts": "Is better to give than to receive unless the gift is chosen by Madame Minou",
    "Six Hearts": "Always put your best paw forward",
    "Seven Hearts": "All you need in life is love... also some cat treats",
    "Eight Hearts": "Dont be affraid to throw everything from the table... be careless!",
    "Nine Hearts": "You will meet a special furry friend around the corner",
    "Ten Hearts": "Keep your eyes open there are interesting and tasty mice",
    "Jack Hearts": "If you love someone fight for them",
    "Queen Hearts": "Money cant buy happyness unless you pay someone to scratch your belly",
    "King Hearts": "The neighbors grass is always greener... enjoy",

    //Clubs
    "Ace Clubs": "Walk fearlessly you are a lion!",
    "Two Clubs": "Always land on your feet... jump!!",
    "Three Clubs": "You got seven lifes... be reckless!!!!",
    "Four Clubs": "Dont forget to take a cat nap",
    "Five Clubs": "Purrrring can get you everywhere",
    "Six Clubs": "Dont be afraid to think outside the litter box",
    "Seven Clubs": "To be a hero doesnt require to be a special breed",
    "Eight Clubs": "If you want to change the world, first change your litter box!!",
    "Nine Clubs": "Mastering through repetition makes purrfect!!",
    "Ten Clubs": "Go to the big city and climb some big walls",
    "Jack Clubs": "You need to involve politics in relationships",
    "Queen Clubs": "An important couch will make you look powerful no matter how cute you are",
    "King Clubs": "Play like a winner every  time",

    //Diamonds
    "Ace Diamonds": "Best things are made of cardboard... be humble",
    "Two Diamonds": "Good things can be squeezed in small boxes",
    "Three Diamonds": "Curiosity never actually killed a cat",
    "Four Diamonds": "Dont be affraid to expose your fluffy belly",
    "Five Diamonds": "A fool and his prey Are soon parted.",
    "Six Diamonds": "Love can be in the chimney",
    "Seven Diamonds": "never let The cat out of the bag... thank me later",
    "Eight Diamonds": "I never seen it rain cats and dogs",
    "Nine Diamonds": "you can’t teach an old dog new tricks... cats on the other hand...",
    "Ten Diamonds": "Hold your cats",
    "Jack Diamonds": "Dont be fooled by those cat tears",
    "Queen Diamonds": "Give a cat a fish... not dry food",
    "King Diamonds": "Go down the cat hole",

    //Spades
    "Ace Spades": "Transform yourself regularly but, dont lose your cat soul",
    "Two Spades": "Dont be affraid to use your claws to climb to the top",
    "Three Spades": "The early cat gets the mouse",
    "Four Spades": "Treat everyone as your friend and soon they will be",
    "Five Spades": "Purr and meowing can get you our of trouble",
    "Six Spades": "To be or not to be? Just take a nap",
    "Seven Spades": "Cats are conspiring to take over the world... be a cat",
    "Eight Spades": "Relationships are about give and take",
    "Nine Spades": "You can teach a cat to do anything it wants to do",
    "Ten Spades": "Just because you can, doesnt mean you should",
    "Jack Spades": "Humans dont own cats... we own humans",
    "Queen Spades": "Life is simple... some food, milk, warm and cozy home is what we need... also LOVE!",
    "King Spades": "It's good to belong to a cat gang but also never forget to keep your individuality",
        
};

  constructor(
    // private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
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
        // this.yourHand.push(this.hand[i].getRank(), this.hand[i].getSuit())
        // console.log(this.hand[i].getRank(), this.hand[i].getSuit());
        card= this.hand[i].getRank()+ " "+ this.hand[i].getSuit();
        this.youCard=card;
        
    }
    // return this.yourCard;
}
read(){
    this.take();
    this.showHand();
    console.log(this.youCard);

    console.log(this.readings[this.youCard]);
    this.yourReading=this.readings[this.youCard];
    this.youCardImg=this.yourHand[this.youCard]
    

}

shuffle(){
  this.deck.reset();
  this.deck.shuffle();
  this.youCard=null;
}

}









 