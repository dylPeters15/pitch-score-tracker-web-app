import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Round, PitchGameModel } from '../game-model.service';

export class NewRoundDialogCompnentInitData {
  pitchGameModel: PitchGameModel;
  roundNumToEdit: number; //-1 if not editing
  constructor(pitchGameModel: PitchGameModel, roundNumToEdit: number) {
    this.pitchGameModel = pitchGameModel;
    this.roundNumToEdit = roundNumToEdit;
  }
}

@Component({
  selector: 'app-new-round-dialog',
  templateUrl: './new-round-dialog.component.html',
  styleUrls: ['./new-round-dialog.component.css']
})
export class NewRoundDialogComponent implements OnInit {
  round: Round = new Round();
  bidderPoints: number = 5;

  constructor(private dialogRef: MatDialogRef<NewRoundDialogComponent>, @Inject(MAT_DIALOG_DATA) public initData: NewRoundDialogCompnentInitData) {
    if (this.validRoundNum()) {
      this.round = new Round(initData.pitchGameModel.rounds[initData.roundNumToEdit].team1effect, 
        initData.pitchGameModel.rounds[initData.roundNumToEdit].team2effect, 
        initData.pitchGameModel.rounds[initData.roundNumToEdit].bidder, 
        initData.pitchGameModel.rounds[initData.roundNumToEdit].bidAmount);
    }
  }

  ngOnInit() {
  }

  validRoundNum(): boolean {
    return this.initData.roundNumToEdit >= 0 && this.initData.roundNumToEdit < this.initData.pitchGameModel.rounds.length
  }

  getPlayers(): string[] {
    return [this.initData.pitchGameModel.team1.player1, 
      this.initData.pitchGameModel.team1.player2, 
      this.initData.pitchGameModel.team2.player1, 
      this.initData.pitchGameModel.team2.player2];
  }

  save(): void {
    if (this.round.bidAmount > this.bidderPoints) {
      this.round.team1effect = this.bidderOnTeam1()?-1*this.round.bidAmount:10-this.bidderPoints;
      this.round.team2effect = this.bidderOnTeam1()?10-this.bidderPoints:-1*this.round.bidAmount;
    } else {
      this.round.team1effect = this.bidderOnTeam1()?this.bidderPoints:10-this.bidderPoints;
      this.round.team2effect = 10 - this.round.team1effect;
    }
    if (this.validRoundNum()) {
      this.initData.pitchGameModel.rounds.splice(this.initData.roundNumToEdit, 1, this.round);
    } else {
      this.initData.pitchGameModel.rounds.push(this.round);
    }
    this.dialogRef.close();
  }

  bidderOnTeam1(): boolean {
    return this.round.bidder == this.initData.pitchGameModel.team1.player1 || this.round.bidder == this.initData.pitchGameModel.team1.player2;
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
