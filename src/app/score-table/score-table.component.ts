import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';
import { Round, PitchGameModel } from '../game-model.service';
import { NewTeamDialogComponent } from '../new-team-dialog/new-team-dialog.component';
import { NewRoundDialogComponent } from '../new-round-dialog/new-round-dialog.component';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  @Input() pitchGameModel: PitchGameModel = new PitchGameModel();
  dataSource: MatTableDataSource<Round> = new MatTableDataSource(this.pitchGameModel.rounds);
  columnsToDisplay = ['team1col', 'bidder', 'bidAmount', 'team2col'];

  constructor(private dialog: MatDialog) {
    var thisobject = this;
    new Promise(async (resolve, reject) => {
      console.log("Pitch game model: ", this.pitchGameModel);
      await this.editTeam1(true);
      await this.editTeam2(true);
      thisobject.refreshData();
    })
  }

  ngOnInit() {
  }

  refreshData(): void {
    this.dataSource = new MatTableDataSource(this.pitchGameModel.rounds);
  }

  async editTeam1(disableClose?: boolean): Promise<void> {
    console.log("edit team 1");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.pitchGameModel.team1;
    dialogConfig.disableClose = disableClose;
    var closeData = await this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().toPromise();
    if (closeData) {
      this.pitchGameModel.team1 = closeData;
      console.log(closeData);
    }
  }

  async editTeam2(disableClose?: boolean): Promise<void> {
    console.log("edit team 2");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.pitchGameModel.team2;
    dialogConfig.disableClose = disableClose;
    var closeData = await this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().toPromise();
    if (closeData) {
      this.pitchGameModel.team2 = closeData;
      console.log(closeData);
    }
  }

  editRound(round: Round): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = round;
    this.dialog.open(NewRoundDialogComponent, dialogConfig).afterClosed().subscribe(closeData => {
      this.refreshData();
    });
    console.log(round);
  }

}
