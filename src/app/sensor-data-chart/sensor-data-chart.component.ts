import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SensorData } from '../sensor-data';
import { Chart, ChartDataSets, ChartType } from 'chart.js'
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sensor-data-chart',
  templateUrl: './sensor-data-chart.component.html',
  styleUrls: ['./sensor-data-chart.component.css']
})
export class SensorDataChartComponent implements OnInit, OnChanges {

  @Input() pastSensorData: SensorData[];
  @Input() predictionData: SensorData[];

  public chart: Chart;
  public chartData: ChartDataSets[];
  public chartLabels: Label[];
  public chartOpts: ChartOptions;
  public chartType: ChartType;

  constructor() {

  }

  ngOnChanges() {
    this.updateChart()
  }

  ngOnInit(): void {
    var pastDates = this.pastSensorData.map(res => res.date.toUTCString());
    var pastSensorValues = this.pastSensorData.map(res => res.value);
    if (this.predictionData){
      var predsSensorValues = this.predictionData.map(res => ({ x: res.date.toUTCString(), y: res.value}));
      var predsDates = this.predictionData.map(res => res.date.toUTCString());

      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type },
        { data: predsSensorValues, label: this.predictionData[0].type }
      ];
      this.chartLabels = pastDates.concat(predsDates);
    } else {
      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type }
      ];
      this.chartLabels = pastDates;
    }

    this.chartOpts = {
      responsive: true,
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      },
      legend: {
        display: true
      }
    };

    this.chartType = 'line';
  }

  private updateChart(){
    var pastDates = this.pastSensorData.map(res => res.date.toUTCString());
    var pastSensorValues = this.pastSensorData.map(res => res.value);

    if (this.predictionData){
      var predsSensorValues = this.predictionData.map(res => ({ x: res.date.toUTCString(), y: res.value}));
      var predsDates = this.predictionData.map(res => res.date.toUTCString());

      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type },
        { data: predsSensorValues, label: this.predictionData[0].type }
      ];
      this.chartLabels = pastDates.concat(predsDates);
    } else {
      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type }
      ];
      this.chartLabels = pastDates;
    }
  }
}
