import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarOandmComponent } from './solar-oandm.component';

describe('SolarOandmComponent', () => {
  let component: SolarOandmComponent;
  let fixture: ComponentFixture<SolarOandmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolarOandmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolarOandmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
