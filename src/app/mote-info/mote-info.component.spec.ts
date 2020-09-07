import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteInfoComponent } from './mote-info.component';

describe('MoteInfoComponent', () => {
  let component: MoteInfoComponent;
  let fixture: ComponentFixture<MoteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
