import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitsoService } from '../bitso.service';
import { Ticker } from '../ticker';
import { LastTradesComponent } from '../last-trades/last-trades.component';

@Component({
  selector: 'app-market-info',
  templateUrl: './market-info.component.html',
  styleUrls: ['./market-info.component.css']
})
export class MarketInfoComponent implements OnInit {
  tickers: Ticker;
  lastTrades: LastTradesComponent;

  constructor(
    private bitsoService: BitsoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTicker();
  }

  getTicker(): void {
    let book = this.route.snapshot.paramMap.get('book');
    if (book == null) {
      book = 'btc_mxn';
    }
    this.bitsoService.getTicker(book)
      .subscribe(tickers => {
        console.log(tickers);
        this.tickers = tickers;
      }
    );
    this.lastTrades.getTrades();
  }
}
