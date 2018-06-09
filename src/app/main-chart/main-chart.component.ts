import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const chart = AmCharts.makeChart( 'chartdiv', {
      'type': 'serial',
      'categoryField': 'date',
      'autoMarginOffset': 40,
      'marginRight': 60,
      'marginTop': 60,
      'creditsPosition': 'bottom-left',
      'fontSize': 13,
      'theme': 'black',
      'categoryAxis': {
        'parseDates': true,
        'position': 'top',
        'axisAlpha': 0
      },
      'chartCursor': {
        'enabled': true,
        'categoryBalloonEnabled': false,
        'fullWidth': true,
        'cursorAlpha': 0.25,
        'cursorColor': '#000000',
        /*'leaveCursor': true true to keep the cursor when the mouse go out chart*/
      },
      'chartScrollbar': {
        'enabled': true,
        'backgroundAlpha': 0,
        'graph': 'g1',
        'graphFillColor': '#252c36',
        'graphType': 'step',
        'offset': -62,
        'resizeEnabled': false,
        'scrollbarHeight': 62,
        'selectedBackgroundAlpha': 0
      },
      'trendLines': [],
      'graphs': [
        {
          'balloonText': 'Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>',
          'closeField': 'close',
          'columnWidth': 0.9,
          'cornerRadiusTop': 2,
          'fillAlphas': 0.9,
          'fillColors': '#466830',
          'highField': 'high',
          'id': 'g1',
          'lineColor': '#80C156',
          'lowField': 'low',
          'negativeFillColors': '#722837',
          'negativeLineColor': '#CC4458',
          'noStepRisers': true,
          'openField': 'open',
          'title': 'Price:',
          'type': 'candlestick',
          'valueField': 'close'
        }
      ],
      'guides': [
        {
          'id': 'Guide-1'
        },
        {
          'id': 'Guide-2'
        }
      ],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'position': 'right',
          'axisAlpha': 0,
          'color': '#596779'
        },
        {
          'id': 'ValueAxis-2',
          'position': 'top',
          'color': '#596779'
        }
      ],
      'allLabels': [],
      'balloon': {
        'animationDuration': 0,
        'borderThickness': 1,
        'borderColor': '#eee',
        'color': '#eee',
        'fillAlpha': 0.9,
        'fillColor': '#2D323C',
        'fontSize': 12,
        'horizontalPadding': 30,
        'pointerWidth': 4,
        'shadowAlpha': 0,
        'verticalPadding': 12
      },
      'titles': [],
      /*'dataProvider': [
        {
          'date': '2011-08-01',
          'open': '136.65',
          'high': '136.96',
          'low': '134.15',
          'close': '136.49'
        },
        {
          'date': '2011-08-02',
          'open': '135.26',
          'high': '135.95',
          'low': '131.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-03',
          'open': '134.26',
          'high': '136.95',
          'low': '133.50',
          'close': '132.85'
        },
        {
          'date': '2011-08-04',
          'open': '137.26',
          'high': '139.95',
          'low': '138.50',
          'close': '138.85'
        },
        {
          'date': '2011-08-05',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-08-06',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-08-07',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-08-08',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-08-09',
          'open': '123.12',
          'high': '127.75',
          'low': '120.30',
          'close': '125.00'
        },
        {
          'date': '2011-08-10',
          'open': '136.26',
          'high': '139.95',
          'low': '136.50',
          'close': '137.85'
        },
        {
          'date': '2011-08-12',
          'open': '128.32',
          'high': '129.35',
          'low': '126.50',
          'close': '127.79'
        },
        {
          'date': '2011-08-13',
          'open': '128.29',
          'high': '128.30',
          'low': '123.71',
          'close': '124.03'
        },
        {
          'date': '2011-08-14',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-15',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-16',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-17',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-18',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-19',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-20',
          'open': '127.26',
          'high': '128.95',
          'low': '126.50',
          'close': '126.85'
        },
        {
          'date': '2011-08-21',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-22',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-23',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-24',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-25',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-26',
          'open': '130.26',
          'high': '132.95',
          'low': '129.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-27',
          'open': '136.65',
          'high': '136.96',
          'low': '134.15',
          'close': '136.49'
        },
        {
          'date': '2011-08-28',
          'open': '135.26',
          'high': '135.95',
          'low': '131.50',
          'close': '131.85'
        },
        {
          'date': '2011-08-29',
          'open': '134.26',
          'high': '136.95',
          'low': '133.50',
          'close': '132.85'
        },
        {
          'date': '2011-08-30',
          'open': '137.26',
          'high': '139.95',
          'low': '138.50',
          'close': '138.85'
        },
        {
          'date': '2011-09-01',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-09-02',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-03',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-04',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-05',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-09-06',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-07',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-08',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-09',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-09-10',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-11',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-12',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-13',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-14',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-15',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-16',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-17',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-09-18',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-19',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-20',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-21',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-22',
          'open': '132.90',
          'high': '135.27',
          'low': '128.30',
          'close': '135.25'
        },
        {
          'date': '2011-09-23',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-24',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-25',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-26',
          'open': '134.94',
          'high': '137.24',
          'low': '132.63',
          'close': '135.03'
        },
        {
          'date': '2011-09-27',
          'open': '136.76',
          'high': '136.86',
          'low': '132.00',
          'close': '134.01'
        },
        {
          'date': '2011-09-28',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
        {
          'date': '2011-09-29',
          'open': '131.11',
          'high': '133.00',
          'low': '125.09',
          'close': '126.39'
        },
      ]*/
      'dataProvider': [{
        'date': '2011-08-01',
        'open': '136.65',
        'high': '136.96',
        'low': '134.15',
        'close': '136.49'
    }, {
        'date': '2011-08-02',
        'open': '135.26',
        'high': '135.95',
        'low': '131.50',
        'close': '131.85'
    }, {
        'date': '2011-08-05',
        'open': '132.90',
        'high': '135.27',
        'low': '128.30',
        'close': '135.25'
    }, {
        'date': '2011-08-06',
        'open': '134.94',
        'high': '137.24',
        'low': '132.63',
        'close': '135.03'
    }, {
        'date': '2011-08-07',
        'open': '136.76',
        'high': '136.86',
        'low': '132.00',
        'close': '134.01'
    }, {
        'date': '2011-08-08',
        'open': '131.11',
        'high': '133.00',
        'low': '125.09',
        'close': '126.39'
    }, {
        'date': '2011-08-09',
        'open': '123.12',
        'high': '127.75',
        'low': '120.30',
        'close': '125.00'
    }, {
        'date': '2011-08-12',
        'open': '128.32',
        'high': '129.35',
        'low': '126.50',
        'close': '127.79'
    }, {
        'date': '2011-08-13',
        'open': '128.29',
        'high': '128.30',
        'low': '123.71',
        'close': '124.03'
    }, {
        'date': '2011-08-14',
        'open': '122.74',
        'high': '124.86',
        'low': '119.65',
        'close': '119.90'
    }, {
        'date': '2011-08-15',
        'open': '117.01',
        'high': '118.50',
        'low': '111.62',
        'close': '117.05'
    }, {
        'date': '2011-08-16',
        'open': '122.01',
        'high': '123.50',
        'low': '119.82',
        'close': '122.06'
    }, {
        'date': '2011-08-19',
        'open': '123.96',
        'high': '124.50',
        'low': '120.50',
        'close': '122.22'
    }, {
        'date': '2011-08-20',
        'open': '122.21',
        'high': '128.96',
        'low': '121.00',
        'close': '127.57'
    }, {
        'date': '2011-08-21',
        'open': '131.22',
        'high': '132.75',
        'low': '130.33',
        'close': '132.51'
    }, {
        'date': '2011-08-22',
        'open': '133.09',
        'high': '133.34',
        'low': '129.76',
        'close': '131.07'
    }, {
        'date': '2011-08-23',
        'open': '130.53',
        'high': '135.37',
        'low': '129.81',
        'close': '135.30'
    }, {
        'date': '2011-08-26',
        'open': '133.39',
        'high': '134.66',
        'low': '132.10',
        'close': '132.25'
    }, {
        'date': '2011-08-27',
        'open': '130.99',
        'high': '132.41',
        'low': '126.63',
        'close': '126.82'
    }, {
        'date': '2011-08-28',
        'open': '129.88',
        'high': '134.18',
        'low': '129.54',
        'close': '134.08'
    }, {
        'date': '2011-08-29',
        'open': '132.67',
        'high': '138.25',
        'low': '132.30',
        'close': '136.25'
    }, {
        'date': '2011-08-30',
        'open': '139.49',
        'high': '139.65',
        'low': '137.41',
        'close': '138.48'
    }, {
        'date': '2011-09-03',
        'open': '139.94',
        'high': '145.73',
        'low': '139.84',
        'close': '144.16'
    }, {
        'date': '2011-09-04',
        'open': '144.97',
        'high': '145.84',
        'low': '136.10',
        'close': '136.76'
    }, {
        'date': '2011-09-05',
        'open': '135.56',
        'high': '137.57',
        'low': '132.71',
        'close': '135.01'
    }, {
        'date': '2011-09-06',
        'open': '132.01',
        'high': '132.30',
        'low': '130.00',
        'close': '131.77'
    }, {
        'date': '2011-09-09',
        'open': '136.99',
        'high': '138.04',
        'low': '133.95',
        'close': '136.71'
    }, {
        'date': '2011-09-10',
        'open': '137.90',
        'high': '138.30',
        'low': '133.75',
        'close': '135.49'
    }, {
        'date': '2011-09-11',
        'open': '135.99',
        'high': '139.40',
        'low': '135.75',
        'close': '136.85'
    }, {
        'date': '2011-09-12',
        'open': '138.83',
        'high': '139.00',
        'low': '136.65',
        'close': '137.20'
    }, {
        'date': '2011-09-13',
        'open': '136.57',
        'high': '138.98',
        'low': '136.20',
        'close': '138.81'
    }, {
        'date': '2011-09-16',
        'open': '138.99',
        'high': '140.59',
        'low': '137.60',
        'close': '138.41'
    }, {
        'date': '2011-09-17',
        'open': '139.06',
        'high': '142.85',
        'low': '137.83',
        'close': '140.92'
    }, {
        'date': '2011-09-18',
        'open': '143.02',
        'high': '143.16',
        'low': '139.40',
        'close': '140.77'
    }, {
        'date': '2011-09-19',
        'open': '140.15',
        'high': '141.79',
        'low': '139.32',
        'close': '140.31'
    }, {
        'date': '2011-09-20',
        'open': '141.14',
        'high': '144.65',
        'low': '140.31',
        'close': '144.15'
    }, {
        'date': '2011-09-23',
        'open': '146.73',
        'high': '149.85',
        'low': '146.65',
        'close': '148.28'
    }, {
        'date': '2011-09-24',
        'open': '146.84',
        'high': '153.22',
        'low': '146.82',
        'close': '153.18'
    }, {
        'date': '2011-09-25',
        'open': '154.47',
        'high': '155.00',
        'low': '151.25',
        'close': '152.77'
    }, {
        'date': '2011-09-26',
        'open': '153.77',
        'high': '154.52',
        'low': '152.32',
        'close': '154.50'
    }, {
        'date': '2011-09-27',
        'open': '153.44',
        'high': '154.60',
        'low': '152.75',
        'close': '153.47'
    }, {
        'date': '2011-09-30',
        'open': '154.63',
        'high': '157.41',
        'low': '152.93',
        'close': '156.34'
    }, {
        'date': '2011-10-01',
        'open': '156.55',
        'high': '158.59',
        'low': '155.89',
        'close': '158.45'
    }, {
        'date': '2011-10-02',
        'open': '157.78',
        'high': '159.18',
        'low': '157.01',
        'close': '157.92'
    }, {
        'date': '2011-10-03',
        'open': '158.00',
        'high': '158.08',
        'low': '153.50',
        'close': '156.24'
    }, {
        'date': '2011-10-04',
        'open': '158.37',
        'high': '161.58',
        'low': '157.70',
        'close': '161.45'
    }, {
        'date': '2011-10-07',
        'open': '163.49',
        'high': '167.91',
        'low': '162.97',
        'close': '167.91'
    }, {
        'date': '2011-10-08',
        'open': '170.20',
        'high': '171.11',
        'low': '166.68',
        'close': '167.86'
    }, {
        'date': '2011-10-09',
        'open': '167.55',
        'high': '167.88',
        'low': '165.60',
        'close': '166.79'
    }, {
        'date': '2011-10-10',
        'open': '169.49',
        'high': '171.88',
        'low': '153.21',
        'close': '162.23'
    }, {
        'date': '2011-10-11',
        'open': '163.01',
        'high': '167.28',
        'low': '161.80',
        'close': '167.25'
    }, {
        'date': '2011-10-14',
        'open': '167.98',
        'high': '169.57',
        'low': '163.50',
        'close': '166.98'
    }, {
        'date': '2011-10-15',
        'open': '165.54',
        'high': '170.18',
        'low': '165.15',
        'close': '169.58'
    }, {
        'date': '2011-10-16',
        'open': '172.69',
        'high': '173.04',
        'low': '169.18',
        'close': '172.75'
    }, {
        'date': '2011-10-17',
        'open': '171.50',
        'high': '174.19',
        'low': '171.05',
        'close': '173.50'
    }, {
        'date': '2011-10-18',
        'open': '174.24',
        'high': '174.63',
        'low': '170.00',
        'close': '170.42'
    }]
    });
  }
}
