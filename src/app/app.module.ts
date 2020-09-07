import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoteInfoComponent } from './mote-info/mote-info.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component'
import { MoteDataService } from './mote-data.service';
import { SensorDataGridComponent } from './sensor-data-grid/sensor-data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MoteInfoComponent,
    SensorDataComponent,
    SensorDataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    MoteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
