import { Component, ViewChild, ElementRef, AfterViewChecked, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Widget } from './dashboard.model';


declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DashboardService]
})
export class DashboardComponent implements AfterViewChecked, OnDestroy ,OnInit{

  ngOnInit() {
    //console.log('xyz1');
   // $('.grid-stack').on('change', function(event, items) {​​​​console.log('xyz2',items[0].el.css("width"),'xyz2',items[0].el.css("height"));}​​​​);
    
    
  }
  
  @ViewChild('gridStackContainer',{static: false})
  public gridStackContainer: ElementRef;

  public widgets: Widget[];

  constructor(
    private service: DashboardService) {
    this.loadWidgets();
  }

  
  ngAfterViewChecked() {
    if (this.widgets) {
      $(this.gridStackContainer.nativeElement).gridstack();
    }
  }

  public loadWidgets() {
    this.service.getWidgets()
      .subscribe(arg => {
        this.widgets = arg;
        this.destroyGrid();
      });
  }

  private destroyGrid() {
    const grid = $(this.gridStackContainer.nativeElement).data('gridstack');
    if (grid) {
      grid.destroy(false);
    }
  }

  ngOnDestroy() {
    this.destroyGrid();
  }

  
  
  
  

}