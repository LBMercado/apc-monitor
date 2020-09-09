import { CalibrationData } from './calibration-data';
import { MoteInfoData } from './mote-info-data';

export class MoteInfo {
  name: MoteInfoData;
  uptime: MoteInfoData;
  definiteRoute: MoteInfoData;
  rssi: MoteInfoData;
  prefAddress: MoteInfoData;
  onChipTemp: MoteInfoData;
  vdd3: MoteInfoData;
  calibration: CalibrationData[];

  constructor(){
    this.name = {
      type: 'myName',
      value: ''
    };
    this.uptime = {
      type: 'Uptime (sec)',
      value: 0
    };
    this.definiteRoute = {
      type: 'Def Route',
      value: ''
    };
    this.rssi = {
      type: 'RSSI (dBm)',
      value: 0
    };
    this.prefAddress = {
      type: 'Preferred Address',
      value: ''
    };
    this.onChipTemp = {
      type: 'On-Chip Temp (mC)',
      value: 0
    };
    this.vdd3 = {
      type: 'VDD3 (mV)',
      value: 0
    };
    this.calibration = [{
      type: 'CO Rs (Ohms)',
      value: -1
    }, {
      type: 'NO2 Rs (Ohms)',
      value: -1
    }, {
      type: 'O3 Rs (Ohms)',
      value: -1
    }];
  }

  /**
   * constructMoteInfo
   * construct mote info object from mote info-like objects based on types
   */
  public constructMoteInfo(rawMoteInfo: Object){
    Object.keys(rawMoteInfo).forEach((key)=>{
      if (key == 'calibration'){
        rawMoteInfo[key].forEach((rawCalibData) => {
          this.mapCalibrationData(rawCalibData);
        });

        return;
      }

      var actualType = this.findMatchingType(key);

      if (actualType != null){
        this[actualType].value = rawMoteInfo[key]
      }
    });
  }

  private findMatchingType(type: string){
    var returnKey = null
    Object.keys(this).forEach((key)=>{
      if (this[key].type == type)
        returnKey = key;
    });
    return returnKey;
  }

  private mapCalibrationData(rawCalibrationData: Object){

    this.calibration.forEach((calibData)=>{
      if (calibData.type in rawCalibrationData)
        calibData.value = rawCalibrationData[calibData.type];
    });
  }

}
