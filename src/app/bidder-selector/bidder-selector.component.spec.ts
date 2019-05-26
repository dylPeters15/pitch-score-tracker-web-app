import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderSelectorComponent } from './bidder-selector.component';

describe('BidderSelectorComponent', () => {
  let component: BidderSelectorComponent;
  let fixture: ComponentFixture<BidderSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
