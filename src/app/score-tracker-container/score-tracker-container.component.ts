import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewRoundDialogComponent } from '../new-round-dialog/new-round-dialog.component';
import { ScoreTableData } from '../game-model.service';
import { ScoreTableComponent } from '../score-table/score-table.component';

@Component({
  selector: 'app-score-tracker-container',
  templateUrl: './score-tracker-container.component.html',
  styleUrls: ['./score-tracker-container.component.css']
})
export class ScoreTrackerContainerComponent implements OnInit {

  @ViewChild('appScoreTable') appScoreTable?: ScoreTableComponent;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  plusClick() {
    console.log("click");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(NewRoundDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      if (this.appScoreTable) {
        this.appScoreTable.appendRound(closeData);
      }
    });
  }

}
