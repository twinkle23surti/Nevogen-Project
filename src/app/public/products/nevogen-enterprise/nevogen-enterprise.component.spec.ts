import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevogenEnterpriseComponent } from './nevogen-enterprise.component';

describe('NevogenEnterpriseComponent', () => {
  let component: NevogenEnterpriseComponent;
  let fixture: ComponentFixture<NevogenEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevogenEnterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NevogenEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
