import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTrackerContainerComponent } from './score-tracker-container.component';

describe('ScoreTrackerContainerComponent', () => {
  let component: ScoreTrackerContainerComponent;
  let fixture: ComponentFixture<ScoreTrackerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreTrackerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTrackerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
