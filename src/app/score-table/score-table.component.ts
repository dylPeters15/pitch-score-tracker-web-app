import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';
import { ScoreTableData, Round } from '../game-model.service';
import { NewTeamDialogComponent } from '../new-team-dialog/new-team-dialog.component';
import { NewRoundDialogComponent } from '../new-round-dialog/new-round-dialog.component';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  private scoreTableData: ScoreTableData = new ScoreTableData();
  dataSource: MatTableDataSource<Round> = new MatTableDataSource(this.scoreTableData.rounds);
  columnsToDisplay = ['team1col', 'team2col'];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.editTeam1();
    this.editTeam2();
    this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    console.log(this.dataSource);
  }

  appendRound(round: Round): void {
    if (round && round.team1effect != undefined) {
      this.scoreTableData.rounds.push(round);
      this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    }
  }

  editTeam1(): void {
    console.log("edit team 1");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.scoreTableData.team1;
    this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      if (closeData) {
        this.scoreTableData.team1 = closeData;
        console.log(closeData);
      }
    });
  }

  editTeam2(): void {
    console.log("edit team 2");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.scoreTableData.team2;
    this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      if (closeData) {
        this.scoreTableData.team2 = closeData;
        console.log(closeData);
      }
    });
  }

  editRound(round: Round): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = round;
    this.dialog.open(NewRoundDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      if (closeData) {
        console.log(this.scoreTableData.rounds);
        this.scoreTableData.rounds.splice(this.scoreTableData.rounds.indexOf(round), 1, closeData);
        console.log(this.scoreTableData.rounds);
        console.log(closeData);
        this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
      }
    });
    console.log(round);
  }

  

}
