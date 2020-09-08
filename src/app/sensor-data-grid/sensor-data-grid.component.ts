import { Component, OnInit } from '@angular/core';
import { MoteData } from '../mote-data';
import { MoteDataService } from '../mote-data.service'
import { MoteDataCollection } from '../mote-data-collection';

@Component({
  selector: 'app-sensor-data-grid',
  templateUrl: './sensor-data-grid.component.html',
  styleUrls: ['./sensor-data-grid.component.css']
})
export class SensorDataGridComponent implements OnInit {

  moteData: MoteData[];
  moteDataColl: MoteDataCollection;

  constructor(private _moteDataSvc: MoteDataService) {
    this.moteData = []
    this.moteDataColl = new MoteDataCollection()
  }

  ngOnInit(): void {
    this._moteDataSvc.getSensorData(10)
    .subscribe((res) => {

      res.forEach( (val) => {
        this.moteData.push(this.normalizeMoteData(val));
      });

      Object.keys(this.moteDataColl).forEach( (key) => {
        this.moteDataColl[key] = this.moteData.map(val => {
          return {
            type: val[key].type,
            value: val[key].value,
            date: val.date
          }
        });
      });
    });
  }

  normalizeMoteData(rawMoteData: Object): MoteData {
    let formattedMoteData = new MoteData();

    Object.keys(formattedMoteData).forEach( (key) => {
      formattedMoteData[key].value = rawMoteData[formattedMoteData[key].type];
    });

    return formattedMoteData;
  }
}
