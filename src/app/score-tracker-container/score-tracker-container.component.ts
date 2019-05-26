import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewRoundDialogComponent, NewRoundDialogCompnentInitData } from '../new-round-dialog/new-round-dialog.component';
import { PitchGameModel } from '../game-model.service';
import { ScoreTableComponent } from '../score-table/score-table.component';

@Component({
  selector: 'app-score-tracker-container',
  templateUrl: './score-tracker-container.component.html',
  styleUrls: ['./score-tracker-container.component.css']
})
export class ScoreTrackerContainerComponent implements OnInit {

  @ViewChild('appScoreTable') appScoreTable: ScoreTableComponent = {} as ScoreTableComponent;
  pitchGameModel: PitchGameModel = new PitchGameModel();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  plusClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = new NewRoundDialogCompnentInitData(this.pitchGameModel, -1);
    dialogConfig.width = "90%";
    this.dialog.open(NewRoundDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      this.appScoreTable.refreshData();
    });
  }

}
