export class MoteInfo {
  name: string;
  uptime: number;
  definiteRoute: string;
  rssi: number;
  prefAddress: string;
  onChipTemp: number;
  vdd3: number;
  calibration: ICalibration[];

  constructor(){
    this.name = this.definiteRoute = this.prefAddress = '';
    this.uptime = this.rssi = this.onChipTemp = this.vdd3 = 0;
    this.calibration = []
  }
}

interface ICalibration {
  calibrationName: string;
  calibrationValue: number;
}
