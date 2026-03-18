import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevogenRoyalComponent } from './nevogen-royal.component';

describe('NevogenRoyalComponent', () => {
  let component: NevogenRoyalComponent;
  let fixture: ComponentFixture<NevogenRoyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevogenRoyalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NevogenRoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
