import { Component, OnInit } from '@angular/core';
import { BitsoService } from '../bitso.service';
import { ActivatedRoute } from '@angular/router';
import { Trade } from '../trade';

@Component({
  selector: 'app-last-trades',
  templateUrl: './last-trades.component.html',
  styleUrls: ['./last-trades.component.css']
})
export class LastTradesComponent implements OnInit {

  trades: Trade;

  constructor(
    private bitsoService: BitsoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTrades();
  }

  getTrades(): void {
    let book = this.route.snapshot.paramMap.get('book');
    console.log('route: ' + book);
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
