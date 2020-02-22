import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections1hrComponent } from './wind-directions1hr.component';

describe('WindDirections1hrComponent', () => {
  let component: WindDirections1hrComponent;
  let fixture: ComponentFixture<WindDirections1hrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections1hrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections1hrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
