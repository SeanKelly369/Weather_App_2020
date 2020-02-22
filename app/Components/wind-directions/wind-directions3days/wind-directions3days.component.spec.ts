import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections3daysComponent } from './wind-directions3days.component';

describe('WindDirections3daysComponent', () => {
  let component: WindDirections3daysComponent;
  let fixture: ComponentFixture<WindDirections3daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections3daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections3daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
