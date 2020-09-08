import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMoteDataComponent } from './download-mote-data.component';

describe('DownloadMoteDataComponent', () => {
  let component: DownloadMoteDataComponent;
  let fixture: ComponentFixture<DownloadMoteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadMoteDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadMoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
