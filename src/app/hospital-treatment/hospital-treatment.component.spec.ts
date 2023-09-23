import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTreatmentComponent } from './hospital-treatment.component';

describe('HospitalTreatmentComponent', () => {
  let component: HospitalTreatmentComponent;
  let fixture: ComponentFixture<HospitalTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
