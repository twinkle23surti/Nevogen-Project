import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSoftwareComponent } from './solar-software.component';

describe('SolarSoftwareComponent', () => {
  let component: SolarSoftwareComponent;
  let fixture: ComponentFixture<SolarSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolarSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolarSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
