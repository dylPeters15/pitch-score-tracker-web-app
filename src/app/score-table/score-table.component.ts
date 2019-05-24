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
    var thisobject = this;
    new Promise(async (resolve, reject) => {
      await this.editTeam1();
      await this.editTeam2();
      thisobject.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
      console.log(this.dataSource);
    })
    // var thisobject = this;
    //  this.editTeam1().then(() => {
    //   this.editTeam2().then(() => {
    //     thisobject.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    //     console.log(this.dataSource);
    //   });
    //  }); 
  }

  ngOnInit() {
  }

  appendRound(round: Round): void {
    if (round && round.team1effect != undefined) {
      this.scoreTableData.rounds.push(round);
      this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    }
  }

  async editTeam1(): Promise<void> {
    console.log("edit team 1");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.scoreTableData.team1;
    var closeData = await this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().toPromise();
    if (closeData) {
      this.scoreTableData.team1 = closeData;
      console.log(closeData);
    }
  }

  async editTeam2(): Promise<void> {
    console.log("edit team 2");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.scoreTableData.team2;
    var closeData = await this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().toPromise();
    if (closeData) {
      this.scoreTableData.team2 = closeData;
      console.log(closeData);
    }
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
