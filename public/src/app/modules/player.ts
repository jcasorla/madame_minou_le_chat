class Player{
    hand=[];
    yourHand=[];
    youCard;
    readings;
    name;
    deck;
  constructor(name,deck){
      this.name=name;
      this.deck=deck;
     
      this.readings={
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
          "Ten Diamonds": "hold your cats",
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
          "Seven Spades": "cats are conspiring to take over the world... be a cat",
          "Eight Spades": "Relationships are about give and take",
          "Nine Spades": "You can teach a cat to do anything it wants to do",
          "Ten Spades": "Just because you can, doesnt mean you should",
          "Jack Spades": "Humans dont own cats... we own humans",
          "Queen Spades": "Life is simple... some food, milk, warm and cozy home is what we need... also LOVE!",
          "King Spades": "It's good to belong to a cat gang but also never forget to keep your individuality",
              
  };
      
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
      this.showHand();
      console.log(this.youCard);

      console.log(this.readings[this.youCard]);
     
      

  }


}

// // var card = new Card(1,'c')
// // card.show();

// var deck= new Deck();

// var player= new Player("Jose", deck)
// // player.take();
// // player.take();
// // player.take();
// // player.discard();
// player.take();
// // player.showHand();
// player.read();
