import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaradvisoryComponent } from './solaradvisory.component';

describe('SolaradvisoryComponent', () => {
  let component: SolaradvisoryComponent;
  let fixture: ComponentFixture<SolaradvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolaradvisoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolaradvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
