import { Component, OnInit } from '@angular/core';
import { BitsoService } from '../bitso.service';
import { ActivatedRoute } from '@angular/router';
import { Trade } from '../trade';

@Component({
  selector: 'app-buy-sell-postures',
  templateUrl: './buy-sell-postures.component.html',
  styleUrls: ['./buy-sell-postures.component.css']
})
export class BuySellPosturesComponent implements OnInit {

  trades: Trade;

  constructor(
    private bitsoService: BitsoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTrader();
  }

  getTrader(): void {
    let book = this.route.snapshot.paramMap.get('book');
    console.log('getTrader book: ' + book);
    if (book == null) {
      book = 'btc_mxn';
    }
    this.bitsoService.getTrades(book)
    .subscribe(trades => {
      console.log(trades);
      this.trades = trades;
    });
  }

}
