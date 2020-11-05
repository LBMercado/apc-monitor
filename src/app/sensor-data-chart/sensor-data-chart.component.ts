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
    this.updateChart();

    this.chartOpts = {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
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
    var pastSensorValues = this.pastSensorData.map(res => ({ x: res.date.toUTCString(), y: res.value}));

    if (this.predictionData){
      var predsSensorValues = this.predictionData.map(res => ({ x: res.date.toUTCString(), y: res.value}));
      var predsDates = this.predictionData.map(res => res.date.toUTCString());

      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type },
        { data: predsSensorValues, label:  'Forecasted '+ this.predictionData[0].type }
      ];
      // make sure not to duplicate the added date
      this.chartLabels = pastDates.slice(0, -1).concat(predsDates);

    } else {
      this.chartData = [
        { data: pastSensorValues, label: this.pastSensorData[0].type }
      ];
      this.chartLabels = pastDates;
    }
  }
}
