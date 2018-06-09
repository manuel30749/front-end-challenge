import { Component, OnInit } from '@angular/core';
import { BitsoService } from '../bitso.service';
import { ActivatedRoute } from '@angular/router';
import { OrderBook } from '../orderbook';
import { Ticker } from '../ticker';

@Component({
  selector: 'app-buy-sell-postures',
  templateUrl: './buy-sell-postures.component.html',
  styleUrls: ['./buy-sell-postures.component.css']
})
export class BuySellPosturesComponent implements OnInit {

  orderBook: OrderBook;
  tickers: Ticker;

  constructor(
    private bitsoService: BitsoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTicker();
    this.getOrderBook();
  }

  getTicker(): void {
    let book = this.route.snapshot.paramMap.get('book');
    console.log('Buy-sell-posture: getTicker() book: ' + book);
    if (book == null) {
      book = 'btc_mxn';
    }
    this.bitsoService.getTicker(book)
      .subscribe(tickers => {
        console.log(tickers);
        this.tickers = tickers;
      }
    );
  }

  getOrderBook(): void {
    let book = this.route.snapshot.paramMap.get('book');
    console.log('Buy-sell-posture: getOrderBook() book: ' + book);
    if (book == null) {
      book = 'btc_mxn';
    }
    this.bitsoService.getOrderBook(book)
    .subscribe(orderBook => {
      console.log(orderBook);
      this.orderBook = orderBook;
    });
  }
}
