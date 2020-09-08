import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SensorDataGridComponent } from './sensor-data-grid/sensor-data-grid.component';
import { DownloadMoteDataComponent } from './download-mote-data/download-mote-data.component';

const routes: Routes = [
  {
    path: '', component: SensorDataGridComponent,
  },
  {
    path: 'download', component: DownloadMoteDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
