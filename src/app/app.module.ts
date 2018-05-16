import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarketInfoComponent } from './market-info/market-info.component';
import { LastTradesComponent } from './last-trades/last-trades.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MarketInfoComponent,
    LastTradesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
