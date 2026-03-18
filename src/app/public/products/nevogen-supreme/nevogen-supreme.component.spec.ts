import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevogenSupremeComponent } from './nevogen-supreme.component';

describe('NevogenSupremeComponent', () => {
  let component: NevogenSupremeComponent;
  let fixture: ComponentFixture<NevogenSupremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevogenSupremeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NevogenSupremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
