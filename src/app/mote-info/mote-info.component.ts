import { Component, OnInit } from '@angular/core';
import { MoteInfo } from '../mote-info';

@Component({
  selector: 'app-mote-info',
  templateUrl: './mote-info.component.html',
  styleUrls: ['./mote-info.component.css']
})
export class MoteInfoComponent implements OnInit {

  moteInfos: MoteInfo[];

  constructor() {
  }

  ngOnInit(): void {
    this.moteInfos = []
  }

}
