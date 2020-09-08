import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDataChartComponent } from './sensor-data-chart.component';

describe('SensorDataChartComponent', () => {
  let component: SensorDataChartComponent;
  let fixture: ComponentFixture<SensorDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorDataChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
