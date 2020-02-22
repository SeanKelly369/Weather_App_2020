import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections15hrsComponent } from './wind-directions15hrs.component';

describe('WindDirections15hrsComponent', () => {
  let component: WindDirections15hrsComponent;
  let fixture: ComponentFixture<WindDirections15hrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections15hrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections15hrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
