import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-planned-downtime',
  templateUrl: './planned-downtime.component.html',
  styleUrls: ['./planned-downtime.component.css']
})
export class PlannedDowntimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.plannedDowntime_graph()
  }

  plannedDowntime_graph()
  {
    Highcharts.chart('container6', {

      chart: {
          type: 'column'
      },
  
      title: {
          text: 'Total fruit consumption, grouped by gender'
      },
  
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
  
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of fruits'
          }
      },
  
      tooltip: {
          formatter: function () {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' +3;
          }
      },
  
      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },
  
      series: [{
        type:undefined,
          name: 'John',
          data: [5, 3, 4, 7, 2],
          stack: 'male'
      }, {
        type:undefined,
          name: 'Joe',
          data: [3, 4, 4, 2, 5],
          stack: 'male'
      }, {
        type:undefined,
          name: 'Jane',
          data: [2, 5, 6, 2, 1],
          stack: 'female'
      }, {
        type:undefined,
          name: 'Janet',
          data: [3, 0, 4, 4, 3],
          stack: 'female'
      }]
  });
  
  }

}
