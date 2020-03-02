import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocMapComponent } from './geo-loc-map.component';

describe('GeoLocMapComponent', () => {
  let component: GeoLocMapComponent;
  let fixture: ComponentFixture<GeoLocMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
