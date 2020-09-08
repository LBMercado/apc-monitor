import { Component, OnInit } from '@angular/core';
import { MoteDataService } from '../mote-data.service';

@Component({
  selector: 'app-download-mote-data',
  templateUrl: './download-mote-data.component.html',
  styleUrls: ['./download-mote-data.component.css']
})
export class DownloadMoteDataComponent implements OnInit {

  constructor(private _moteDataSvc: MoteDataService) { }

  ngOnInit(): void {
  }

  downloadCsv(){
    this._moteDataSvc.getCsvSensorData()
    .subscribe( res => {
      const formattedBlob = new Blob([res], { type: 'text/csv' });
      const data = window.URL.createObjectURL(formattedBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "air-quality-data.csv";
      link.click();
    } )
  }

}
