import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections3hrsComponent } from './wind-directions3hrs.component';

describe('WindDirections3hrsComponent', () => {
  let component: WindDirections3hrsComponent;
  let fixture: ComponentFixture<WindDirections3hrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections3hrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections3hrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
