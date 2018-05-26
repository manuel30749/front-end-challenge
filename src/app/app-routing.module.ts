import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketInfoComponent } from './market-info/market-info.component';
import { LastTradesComponent } from './last-trades/last-trades.component';

const routes: Routes = [
  { path: '', redirectTo: '/btc_mxn', pathMatch: 'full'},
  { path: ':book', component: MarketInfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
