import { SensorData } from './sensor-data'

export class PredictionData {
  pm25: SensorData;
  co: SensorData;
  no2: SensorData;
  o3: SensorData;
  date: Date;

  constructor(){
    this.pm25 = { type: 'PM25 (ug/m3)', value: -1 };
    this.co = { type: 'CO (PPM)', value: -1 };
    this.no2 = { type: 'NO2 (PPM)', value: -1 };
    this.o3 = { type: 'O3 (PPB)', value: -1 };
    this.date = new Date();
  }

  /*
   * Construct prediction data from JSON object collected from API call
   */
  public constructPredictionData(rawPredsData: object){
    Object.keys(this).forEach( (key) => {
      if (key == 'date')
        this[key] = new Date(rawPredsData[key]);
      else
        this[key].value = rawPredsData[this[key].type];
    });
  }
}
