import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Round } from '../game-model.service';
import { PointSelectorComponent } from '../point-selector/point-selector.component';

@Component({
  selector: 'app-new-round-dialog',
  templateUrl: './new-round-dialog.component.html',
  styleUrls: ['./new-round-dialog.component.css']
})
export class NewRoundDialogComponent implements OnInit {

  round: Round = new Round();
  @ViewChild('slider') slider: PointSelectorComponent = {} as PointSelectorComponent;

  constructor(private dialogRef: MatDialogRef<NewRoundDialogComponent>, @Inject(MAT_DIALOG_DATA) public initData: Round) {
    this.round = new Round(initData.team1effect, initData.team2effect);
  }

  ngOnInit() {
    this.slider.change.subscribe(() => {
      console.log("Point Selector Component: ", this.slider.points);
      console.log("round: ", this.round);
    });
  }

  save(): void {
    console.log(this.round);
    this.dialogRef.close(this.round);
  }

  cancel(): void {
    this.dialogRef.close(this.initData);
  }

}
