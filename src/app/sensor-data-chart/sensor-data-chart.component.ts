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

  @Input() sensorData: SensorData[];

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
    var dates = this.sensorData.map(res => res.date.toUTCString());
    var sensorValues = this.sensorData.map(res => res.value);

    this.chartData = [
      { data: sensorValues, label: this.sensorData[0].type }
    ];
    this.chartLabels = dates;

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

  updateChart(){
    var dates = this.sensorData.map(res => res.date.toUTCString());
    var sensorValues = this.sensorData.map(res => res.value);

    this.chartData = [
      { data: sensorValues, label: this.sensorData[0].type }
    ];
    this.chartLabels = dates;
  }
}
