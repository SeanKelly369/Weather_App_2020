import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirections1dayComponent } from './wind-directions1day.component';

describe('WindDirections1dayComponent', () => {
  let component: WindDirections1dayComponent;
  let fixture: ComponentFixture<WindDirections1dayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirections1dayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirections1dayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
