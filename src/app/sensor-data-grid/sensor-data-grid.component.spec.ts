import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDataGridComponent } from './sensor-data-grid.component';

describe('SensorDataGridComponent', () => {
  let component: SensorDataGridComponent;
  let fixture: ComponentFixture<SensorDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
