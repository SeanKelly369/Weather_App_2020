import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections9hrsComponent } from './wind-directions9hrs.component';

describe('WindDirections9hrsComponent', () => {
  let component: WindDirections9hrsComponent;
  let fixture: ComponentFixture<WindDirections9hrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections9hrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections9hrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
