import { Component, OnInit, Input } from '@angular/core';
import { SensorData } from '../sensor-data';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  @Input() sensorData: SensorData[];

  sensorDataChart: any;

  // chart options
  private chartConfig = {
    type: 'line',
    data: {
      labels: this.sensorData.map(res => res.sensorType),
      datasets: [
        {
          data: this.sensorData.map(res => res.sensorValue)
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.sensorData = []
    this.sensorDataChart = new Chart('sensorDataChart', this.chartConfig);
  }

}
