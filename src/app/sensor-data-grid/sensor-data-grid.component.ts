import { Component, OnInit } from '@angular/core';
import { MoteData } from '../mote-data';
import { MoteDataService } from '../mote-data.service';
import { MoteDataCollection } from '../mote-data-collection';
import { interval, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { PredictionData } from '../prediction-data';
import { PredictionDataCollection } from '../prediction-data-collection';

@Component({
  selector: 'app-sensor-data-grid',
  templateUrl: './sensor-data-grid.component.html',
  styleUrls: ['./sensor-data-grid.component.css'],
})
export class SensorDataGridComponent implements OnInit {
  moteData: MoteData[];
  moteDataColl: MoteDataCollection;
  predictionData: PredictionData[];
  predictionDataColl: PredictionDataCollection;
  updateInterval: number;
  sensorDataCount: number;
  predictionCount: number;

  constructor(private _moteDataSvc: MoteDataService) {
    this.moteData = [];
    this.moteDataColl = new MoteDataCollection();
    this.predictionData = [];
    this.predictionDataColl = new PredictionDataCollection();
    this.updateInterval = env.chart_refresh_rate;
    this.sensorDataCount = env.graph_data_length;
    this.predictionCount = env.prediction_count;
  }

  ngOnInit(): void {
    this.updateData();
    interval(this.updateInterval).subscribe(() => {
      this.updateData();
    });
  }

  private updateData() {
    this._moteDataSvc.getSensorData(this.sensorDataCount).subscribe((res) => {
      this.moteData = [];
      this.moteDataColl = new MoteDataCollection();

      res.forEach((val) => {
        var newMoteData = new MoteData();
        newMoteData.constructMoteData(val);
        this.moteData.push(newMoteData);
      });
      // array is in wrong order for chart (must be ascending with reference to dates)
      this.moteData.reverse();

      this.moteDataColl.constructMoteDataCollection(this.moteData);

      this._moteDataSvc
        .getPredictionData(this.predictionCount)
        .subscribe((res) => {
          this.predictionData = [];
          this.predictionDataColl = new PredictionDataCollection();

          // push last value from past data into predictions to connect the two graphs
          var lastMoteData = this.moteData[this.moteData.length - 1];
          var firstPredData = new PredictionData();
          firstPredData.co = lastMoteData.co;
          firstPredData.no2 = lastMoteData.no2;
          firstPredData.o3 = lastMoteData.o3;
          firstPredData.pm25 = lastMoteData.pm25;
          firstPredData.date = lastMoteData.date;
          this.predictionData.push(firstPredData);

          res.forEach((obj) => {
            var predsData = new PredictionData();
            predsData.constructPredictionData(obj);
            this.predictionData.push(predsData);
          });

          this.predictionDataColl.constructPredictionDataCollection(
            this.predictionData
          );
        });
    });
  }
}
