import { Injectable } from '@angular/core';
import { readings, hand } from './data';
import {Subject} from 'rxjs' // make data to subscribe
import { of, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Read } from './models/read';


@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  // private readonly base = 'https://5d8d5048370f02001405be67.mockapi.io/cats';
  private readonly base = 'https://5d8e5e9c7162f10014a490a9.mockapi.io/cats';
  readings$ = new Subject<string>();  // subscribe to read
  hand$ = new Subject<string>();


  constructor(private readonly http: HttpClient) { }

  readings(card){
    this.readings$.next(readings[card]);
  }

  hand(card){
    this.hand$.next(hand[card]);
  }

  createRead(read: Read): Observable<Read> {
    return this.http.post<Read>(this.base, read);
  }

  getReads(): Observable<Read[]> {
    return this.http.get<Read[]>(this.base);
  }

  removeRead(id: number): Observable<Read> {
    return this.http.delete<Read>(`${this.base}/${id}`);
  }

}

