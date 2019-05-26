import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSelectorSliderComponent } from './point-selector-slider.component';

describe('PointSelectorSliderComponent', () => {
  let component: PointSelectorSliderComponent;
  let fixture: ComponentFixture<PointSelectorSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSelectorSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSelectorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
