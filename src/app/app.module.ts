import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarketInfoComponent } from './market-info/market-info.component';
import { LastTradesComponent } from './last-trades/last-trades.component';
import { MainChartComponent } from './main-chart/main-chart.component';
import { BuySellPosturesComponent } from './buy-sell-postures/buy-sell-postures.component';
import { MarketsSidebarComponent } from './markets-sidebar/markets-sidebar.component';

import { BitsoService } from './bitso.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MarketInfoComponent,
    LastTradesComponent,
    MainChartComponent,
    BuySellPosturesComponent,
    MarketsSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BitsoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
