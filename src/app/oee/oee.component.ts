import { Component, OnInit,NgZone } from '@angular/core';
declare const $: any;
declare const window: any;
import {dynamicSer} from './oeeService.sevice'
import * as c3 from 'c3';

declare global {
    interface window {
        FB:any;
    }
}
@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.css'],
  providers:[dynamicSer]
})


export class OeeComponent implements OnInit {
    text:any;
    
  constructor(private _dynamicSer:dynamicSer,private zone: NgZone) { 

  }



  
  ngOnInit():void {
    //this.text=this._dynamicSer.getHeightData; 
   // console.log('text',this.text);
   var self=this;
   var pheightt;
   var widhth2;

   this.zone.run(() => {
     $('.grid-stack').on('change', function(event, items) {
         
       // ​​​​console.log('xyz2',items[0].el.css("width"),'xyz2',items[0].el.css("height"));
       var widthhh=items[0].el.css("width");
        var heightt=items[0].el.css("height");
       
        pheightt=parseInt(heightt, 10);
        widhth2=parseInt(widthhh, 10);

        self.oee_graph(pheightt,widhth2)

        window.FB=pheightt
        //console.log('phe::',window.FB)
        
     }​​​​);
    });
    

    this.oee_graph(400,530)
    
  }

  oee_graph(heightt,widhth2){

    var chart = c3.generate({
        size: {
            height: heightt,
            width: widhth2
        },
               bindto: '#container',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 100, 140, 200, 150, 50]
            ],
            type: 'line'
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });
    
//     Highcharts.chart('container',
//     {
//     chart: {
//         backgroundColor:"white",
//         width:widhth2,
//         height: heightt,
//       type: 'areaspline'
//   },
//   title: {
//       text: 'Average fruit consumption during one week'
//   },
  
//   legend: {
//       layout: 'vertical',
//       align: 'left',
//       verticalAlign: 'top',
    
//       floating: true,
//       borderWidth: 1,
//       backgroundColor:
//           Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
//   },
//   xAxis: {
//       categories: [
//           'Monday',
//           'Tuesday',
//           'Wednesday',
//           'Thursday',
//           'Friday',
//           'Saturday',
//           'Sunday'
//       ],
//       plotBands: [{ // visualize the weekend
//           from: 4.5,
//           to: 6.5,
//           color: 'rgba(68, 170, 213, .2)'
//       }]
//   },
//   yAxis: {
//       title: {
//           text: 'Fruit units'
//       }
//   },
//   tooltip: {
//       shared: true,
//       valueSuffix: ' units'
//   },
//   credits: {
//       enabled: false
//   },
//   plotOptions: {
//       areaspline: {
//           fillOpacity: 0.5
//       }
//   },
//   series: [{
//       name: 'John',
//       type:'line',
//       data: [3, 4, 3, 5, 4, 10, 12]
//   }, {
//       name: 'Jane',
//       type:'line',
//       data: [1, 3, 4, 3, 3, 5, 4]
//   }]
// });
}

}
