import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections5daysComponent } from './wind-directions5days.component';

describe('WindDirections5daysComponent', () => {
  let component: WindDirections5daysComponent;
  let fixture: ComponentFixture<WindDirections5daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections5daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections5daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
