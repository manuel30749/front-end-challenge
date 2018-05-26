import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const chartData = [];
generateChartData();


function generateChartData() {
  const firstDate = new Date();
  firstDate.setHours( 0, 0, 0, 0 );
  firstDate.setDate( firstDate.getDate() - 2000 );

  for ( let i = 0; i < 2000; i++ ) {
    const newDate = new Date( firstDate );

    newDate.setDate( newDate.getDate() + i );

    const open = Math.round( Math.random() * ( 30 ) + 100 );
    const close = open + Math.round( Math.random() * ( 15 ) - Math.random() * 10 );

    let low;
    if ( open < close ) {
      low = open - Math.round( Math.random() * 5 );
    } else {
      low = close - Math.round( Math.random() * 5 );
    }

    let high;
    if ( open < close ) {
      high = close + Math.round( Math.random() * 5 );
    } else {
      high = open + Math.round( Math.random() * 5 );
    }

    const volume = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;
    const value = Math.round( Math.random() * ( 30 ) + 100 );

    chartData[ i ] = ( {
      'date': newDate,
      'open': open,
      'close': close,
      'high': high,
      'low': low,
      'volume': volume,
      'value': value
    } );
  }
}

const chart = AmCharts.makeChart( 'chartdiv', {
  'type': 'stock',
  'theme': 'light',
  'dataSets': [ {
    'fieldMappings': [ {
      'fromField': 'open',
      'toField': 'open'
    }, {
      'fromField': 'close',
      'toField': 'close'
    }, {
      'fromField': 'high',
      'toField': 'high'
    }, {
      'fromField': 'low',
      'toField': 'low'
    }, {
      'fromField': 'volume',
      'toField': 'volume'
    }, {
      'fromField': 'value',
      'toField': 'value'
    } ],
    'color': '#7f8da9',
    'dataProvider': chartData,
    'title': 'West Stock',
    'categoryField': 'date'
  }, {
    'fieldMappings': [ {
      'fromField': 'value',
      'toField': 'value'
    } ],
    'color': '#fac314',
    'dataProvider': chartData,
    'compared': true,
    'title': 'East Stock',
    'categoryField': 'date'
  } ],


  'panels': [ {
      'title': 'Value',
      'showCategoryAxis': false,
      'percentHeight': 70,
      /*'stockGraphs': [ {
        'id': 'g1',
        'type': 'candlestick',
        'openField': 'open',
        'closeField': 'close',
        'highField': 'high',
        'lowField': 'low',
        'valueField': 'close',
        'lineColor': '#7f8da9',
        'fillColors': '#7f8da9',
        'negativeLineColor': '#db4c3c',
        'negativeFillColors': '#db4c3c',
        'fillAlphas': 1,
        'balloonText': 'open:<b>[[open]]</b><br>close:<b>[[close]]</b><br>low:<b>[[low]]</b><br>high:<b>[[high]]</b>',*/
      'valueAxes': [ {
        'id': 'v1',
        'dashLength': 5
      } ],

      'categoryAxis': {
        'dashLength': 5
      },

      'stockGraphs': [ {
        'type': 'candlestick',
        'id': 'g1',
        'openField': 'open',
        'closeField': 'close',
        'highField': 'high',
        'lowField': 'low',
        'valueField': 'close',
        'lineColor': '#7f8da9',
        'fillColors': '#7f8da9',
        'negativeLineColor': '#db4c3c',
        'negativeFillColors': '#db4c3c',
        'fillAlphas': 1,
        'useDataSetColors': false,
        'comparable': true,
        'compareField': 'value',
        'showBalloon': false,
        'proCandlesticks': true
      } ],

      'stockLegend': {
        'valueTextRegular': undefined,
        'periodValueTextComparing': '[[percents.value.close]]%'
      }
    },

    {
      'title': 'Volume',
      'percentHeight': 30,
      'marginTop': 1,
      'showCategoryAxis': true,
      'valueAxes': [ {
        'dashLength': 5
      } ],

      'categoryAxis': {
        'dashLength': 5
      },

      'stockGraphs': [ {
        'valueField': 'volume',
        'type': 'column',
        'showBalloon': false,
        'fillAlphas': 1
      } ],

      'stockLegend': {
        'markerType': 'none',
        'markerSize': 0,
        'labelText': '',
        'periodValueTextRegular': '[[value.close]]'
      }
    }
  ],

  'chartScrollbarSettings': {
    'graph': 'g1',
    'graphType': 'line',
    'usePeriod': 'WW'
  },

  'chartCursorSettings': {
    'valueLineBalloonEnabled': true,
    'valueLineEnabled': true
  },

  'periodSelector': {
    'position': 'bottom',
    'periods': [ {
      'period': 'DD',
      'count': 10,
      'label': '10 days'
    }, {
      'period': 'MM',
      'selected': true,
      'count': 1,
      'label': '1 month'
    }, {
      'period': 'YYYY',
      'count': 1,
      'label': '1 year'
    }, {
      'period': 'YTD',
      'label': 'YTD'
    }, {
      'period': 'MAX',
      'label': 'MAX'
    } ]
  },
  'export': {
    'enabled': true
  }
} );

}
}
