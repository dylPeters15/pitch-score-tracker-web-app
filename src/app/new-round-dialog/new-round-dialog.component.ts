import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Round } from '../game-model.service';

@Component({
  selector: 'app-new-round-dialog',
  templateUrl: './new-round-dialog.component.html',
  styleUrls: ['./new-round-dialog.component.css']
})
export class NewRoundDialogComponent implements OnInit {

  private round: Round = new Round();

  constructor(private dialogRef: MatDialogRef<NewRoundDialogComponent>, @Inject(MAT_DIALOG_DATA) public initData: Round) {
    this.round = new Round(initData.team1effect, initData.team2effect);
  }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close(this.round);
  }

  cancel(): void {
    this.dialogRef.close(this.initData);
  }

}
