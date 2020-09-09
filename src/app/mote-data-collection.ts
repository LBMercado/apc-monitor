import { SensorData } from './sensor-data';
import { MoteData } from './mote-data';

export class MoteDataCollection {
  temperature: SensorData[];
  humidity: SensorData[];
  pm25: SensorData[];
  co: SensorData[];
  no2: SensorData[];
  o3: SensorData[];
  windSpeed: SensorData[];
  windDirection: SensorData[];

  constructor(){
    this.temperature = []
    this.humidity = [];
    this.pm25 = [];
    this.co = [];
    this.no2 = [];
    this.o3 = [];
    this.windSpeed = [];
    this.windDirection = [];
  }

  /**
   * constructMoteDataCollection
   * construct mote data collection from mote data array
   */
  public constructMoteDataCollection(moteData: MoteData[]) {
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
