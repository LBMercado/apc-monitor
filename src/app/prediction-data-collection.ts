import { PredictionData } from './prediction-data';
import { SensorData } from './sensor-data';

export class PredictionDataCollection {
  pm25: SensorData[];
  co: SensorData[];
  no2: SensorData[];
  o3: SensorData[];

  constructor(){
    this.pm25 = [];
    this.co = [];
    this.no2 = [];
    this.o3 = [];
  }

  /**
   * constructPredictionDataCollection
   * construct prediction data collection from prediction data array
   */
  public constructPredictionDataCollection(moteData: PredictionData[]) {
    Object.keys(this).forEach( (key) => {
      this[key] = moteData.map(val => {
        return {
          type: val[key].type,
          value: val[key].value,
          date: val.date
        };
      });
    });
  }
}
