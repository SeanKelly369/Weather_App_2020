import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsNowComponent } from './wind-directions-now.component';

describe('WindDirectionsNowComponent', () => {
  let component: WindDirectionsNowComponent;
  let fixture: ComponentFixture<WindDirectionsNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
