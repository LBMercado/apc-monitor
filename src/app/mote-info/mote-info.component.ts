import { Component, OnInit } from '@angular/core';
import { MoteInfo } from '../mote-info';
import { MoteDataService } from '../mote-data.service';
import { interval } from 'rxjs'

@Component({
  selector: 'app-mote-info',
  templateUrl: './mote-info.component.html',
  styleUrls: ['./mote-info.component.css']
})
export class MoteInfoComponent implements OnInit {

  moteInfos: MoteInfo[];

  constructor(private _moteDataSvc: MoteDataService) {
    this.moteInfos = []
  }

  ngOnInit(): void {
    this.updateMoteInfos();
    interval(600000)
      .subscribe(()=>{
        this.updateMoteInfos();
      });
  }

  private updateMoteInfos(){
    this._moteDataSvc.getMoteInfo()
      .subscribe((rawMoteInfos)=>{
        this.moteInfos = []
        rawMoteInfos.forEach(rawMoteInfo => {
          var formattedMoteInfo = new MoteInfo();
          formattedMoteInfo.constructMoteInfo(rawMoteInfo);
          this.moteInfos.push(formattedMoteInfo);
        });
      })
  }
}
