import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections2daysComponent } from './wind-directions2days.component';

describe('WindDirections2daysComponent', () => {
  let component: WindDirections2daysComponent;
  let fixture: ComponentFixture<WindDirections2daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections2daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections2daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
