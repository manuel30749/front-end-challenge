import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { Book } from './book';
import { Ticker } from './ticker';
import 'rxjs/add/operator/map';
import { Trade } from './trade';

@Injectable()
export class BitsoService {

  private tickerUrl = 'https://api.bitso.com/v3/ticker';
  private tradesUrl = 'https://api.bitso.com/v3/trades';
  data: any = {};

  constructor(
    private http: Http
  ) { }

  getTicker(book: string): Observable<Ticker> {
    console.log('Entra a service con book:' + book);
    return this.http.get(`${this.tickerUrl}/?book=${book}`)
    .map((res: Response) => res.json().payload)
    .pipe(
      catchError(this.handleError('getTicker', []))
    );
  }

  getTrades(book: string): Observable<Trade> {
    console.log('Entra a service getTrade con book:' + book);
    return this.http.get(`${this.tradesUrl}/?book=${book}`)
    .map((res: Response) => res.json().payload)
    .pipe(
      catchError(this.handleError('getTrade', []))
    );
  }

  /*getAvailableBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.availableBooks)
      .pipe(
        catchError(this.handleError('getAvailbaleBook', []))
      );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
