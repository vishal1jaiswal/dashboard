import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { OeeComponent } from './oee/oee.component';
import { FpyComponent } from './fpy/fpy.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { CapacityUtilizationComponent } from './capacity-utilization/capacity-utilization.component';
import { UnplannedDowntimeComponent } from './unplanned-downtime/unplanned-downtime.component';
import { PlannedDowntimeComponent } from './planned-downtime/planned-downtime.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent,
    OeeComponent,
    FpyComponent,
    ProductivityComponent,
    CapacityUtilizationComponent,
    UnplannedDowntimeComponent,
    PlannedDowntimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
