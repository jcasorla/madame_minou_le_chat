


export class Card{

    ranks={1: "Ace", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Jack", 12: "Queen", 13: "King"};
    suits={'c': "Clubs", 'd': "Diamonds", 'h': "Hearts", 's': "Spades"}
    suit;
    rank;
    constructor(rank,suit){
        this.suit=suit;
        this.rank=rank;
        
        
        // if(this.rank in this.ranks && this.suit in this.suits){
        //     return true;
        // }
        // else{
        //     console.log("Wrong suit or rank")
        //     return false;
        // }      
    }
    
  
    getSuit(){
        return this.suits[this.suit];
    }
    getRank(){
        return this.ranks[this.rank];
    }
  
    show(){
        console.log("Card: " + this.getRank() + " of " + this.getSuit());
    }
  
    
  }