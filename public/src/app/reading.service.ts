import { Injectable } from '@angular/core';
import { readings,hand } from './data';
import {Subject} from 'rxjs'//make data subscribeble


@Injectable({
  providedIn: 'root'
})
export class ReadingService {
  readings$ = new Subject<string>();//reading is a subsribeble
  hand$ = new Subject<string>();
 
  
  constructor() { }

  readings(card){
    console.log("got card"+ card);
    this.readings$.next(readings[card]);
    
  }

  hand(card){
    console.log("in hand of service");
    this.hand$.next(hand[card]);
   
  }
}

