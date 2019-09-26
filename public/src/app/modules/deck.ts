


import { Card } from './card';

export class Deck{
    deck=[];
    
    constructor(){
        
        this.reset();
        this.shuffle();
  
    }
  
    reset(){
        console.log("deck reset");
        const suits =['c', 'd', 'h', 's'];
        const ranks=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  
        for (let suit in suits){
            for(let rank in ranks){
                this.deck.push(new Card(ranks[rank],suits[suit]));
            }
        }
    }
  
    shuffle(){
        const {deck} = this;
        let m= deck.length,i;
  
        while(m){
            i=Math.floor(Math.random() * m--);
            [deck[i], deck[m]= deck[i], deck[m]]
        }
    }
  
    deal(){
        return this.deck.pop();
    }
  }