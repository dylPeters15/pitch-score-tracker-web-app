import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoundDialogComponent } from './new-round-dialog.component';

describe('NewRoundDialogComponent', () => {
  let component: NewRoundDialogComponent;
  let fixture: ComponentFixture<NewRoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
