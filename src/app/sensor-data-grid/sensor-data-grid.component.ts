import { Component, OnInit } from '@angular/core';
import { MoteDataService } from '../mote-data.service'
import { SensorData } from '../sensor-data';

@Component({
  selector: 'app-sensor-data-grid',
  templateUrl: './sensor-data-grid.component.html',
  styleUrls: ['./sensor-data-grid.component.css']
})
export class SensorDataGridComponent implements OnInit {

  private moteSensorData: SensorData[];

  constructor(private _moteDataSvc: MoteDataService) { }

  ngOnInit(): void {

  }

}
