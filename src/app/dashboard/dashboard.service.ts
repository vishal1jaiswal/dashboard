import { Injectable, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Widget } from './dashboard.model';
import { Subject } from 'rxjs/Subject';
import * as Highcharts from 'highcharts'

@Injectable()
export class DashboardService implements OnInit {

  @Input()
  id:string;
  ngOnInit() {
  }
  
  public getWidgets(): Observable<Widget[]> {
     const widgets = new Subject<Widget[]>();
     setTimeout(() => {
      widgets.next([
        { positionX: 0, positionY: 0, width: 4, height: 6, content: 'OEE',id:'container' },
        { positionX: 4, positionY: 8, width: 4, height: 6, content: 'FPY',id:'container2'  },
        { positionX: 4, positionY: 0, width: 4, height: 6, content: 'PRODUCTIVITY' ,id:'container3' },
        
        { positionX: 8, positionY: 4, width: 4, height: 6, content: 'CAPACITY UILIZATION',id:'container4'  },
        { positionX: 8, positionY: 4, width: 4, height: 6, content: 'UN-PLANNED DOWNTIMNE', id:'container5'  },
        { positionX: 0, positionY: 10, width: 4, height: 6, content: 'PLANNED-DOWNTIME',id:'container6'  },
        { positionX: 10, positionY: 12, width: 4, height: 6, content: 'SAMPLE',id:'container8'  },
      ]);
     });
     
     return widgets;
  }
}