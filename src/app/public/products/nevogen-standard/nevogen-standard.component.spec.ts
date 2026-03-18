import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevogenStandardComponent } from './nevogen-standard.component';

describe('NevogenStandardComponent', () => {
  let component: NevogenStandardComponent;
  let fixture: ComponentFixture<NevogenStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevogenStandardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NevogenStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
