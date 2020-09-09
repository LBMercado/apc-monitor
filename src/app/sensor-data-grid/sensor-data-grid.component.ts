import { Component, OnInit } from '@angular/core';
import { MoteData } from '../mote-data';
import { MoteDataService } from '../mote-data.service'
import { MoteDataCollection } from '../mote-data-collection';
import { interval } from 'rxjs'

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
    this.updateData();
    interval(600000).subscribe(()=>{
      this.updateData();
    });
  }

  private updateData(){
    this._moteDataSvc.getSensorData(20)
    .subscribe((res) => {
      this.moteData = []
      this.moteDataColl = new MoteDataCollection()

      res.forEach( (val) => {
        var newMoteData = new MoteData();
        newMoteData.constructMoteData(val)
        this.moteData.push(newMoteData);
      });
      // array is in wrong order for chart (must be ascending with reference to dates)
      this.moteData.reverse()

      this.moteDataColl = new MoteDataCollection();
      this.moteDataColl.constructMoteDataCollection(this.moteData);
    });
  }
}
