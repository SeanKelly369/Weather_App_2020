import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections4daysComponent } from './wind-directions4days.component';

describe('WindDirections4daysComponent', () => {
  let component: WindDirections4daysComponent;
  let fixture: ComponentFixture<WindDirections4daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections4daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections4daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
