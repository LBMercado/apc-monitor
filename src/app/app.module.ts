import { BrowserModule } from '@angular/platform-browser';
/* Angular Core Libraries */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
/* External Libraries */
import { ChartsModule } from 'ng2-charts';
/* Internal Project Sources */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoteInfoComponent } from './mote-info/mote-info.component';
import { MoteDataService } from './mote-data.service';
import { SensorDataChartComponent } from './sensor-data-chart/sensor-data-chart.component';
import { SensorDataGridComponent } from './sensor-data-grid/sensor-data-grid.component';
import { DownloadMoteDataComponent } from './download-mote-data/download-mote-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MoteInfoComponent,
    SensorDataChartComponent,
    SensorDataGridComponent,
    DownloadMoteDataComponent
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
