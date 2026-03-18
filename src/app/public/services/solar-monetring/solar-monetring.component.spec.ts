import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarMonetringComponent } from './solar-monetring.component';

describe('SolarMonetringComponent', () => {
  let component: SolarMonetringComponent;
  let fixture: ComponentFixture<SolarMonetringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolarMonetringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolarMonetringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
