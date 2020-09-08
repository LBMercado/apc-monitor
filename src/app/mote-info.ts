import { Calibration } from './calibration';

export class MoteInfo {
  name: string;
  uptime: number;
  definiteRoute: string;
  rssi: number;
  prefAddress: string;
  onChipTemp: number;
  vdd3: number;
  calibration: Calibration[];

  constructor(){
    this.name = this.definiteRoute = this.prefAddress = '';
    this.uptime = this.rssi = this.onChipTemp = this.vdd3 = 0;
    this.calibration = []
  }
}
