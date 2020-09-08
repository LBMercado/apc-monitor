import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoteDataService {
  private api_url: string;

  constructor(private httpClient: HttpClient) {
    this.api_url = env.api_url;
  }

  getSensorData(count?: number){
    if (count != null && count > 0) {
      return this.httpClient.get<Object[]>(`${this.api_url}/sensor-data/${count}`);
    }
    return this.httpClient.get<Object[]>(`${this.api_url}/sensor-data`);
  }

  getSensorDatum(){
    return this.httpClient.get<Object>(`${this.api_url}/sensor-datum`);
  }

  getMoteInfo(){
    return this.httpClient.get<Object>(`${this.api_url}/mote-info`);
  }

  getCsvSensorData(){
    return this.httpClient.get(`${this.api_url}/sensor-data-csv`, { responseType: 'blob' });
  }
}
