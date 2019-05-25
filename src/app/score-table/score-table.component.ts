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
  columnsToDisplay = ['team1col', 'team2col'];

  constructor(private dialog: MatDialog) {
    var thisobject = this;
    new Promise(async (resolve, reject) => {
      console.log("Pitch game model: ", this.pitchGameModel);
      await this.editTeam1();
      await this.editTeam2();
      thisobject.refreshData();
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

  refreshData(): void {
    this.dataSource = new MatTableDataSource(this.pitchGameModel.rounds);
  }

  appendRound(round: Round): void {
    if (round && round.team1effect != undefined) {
      this.pitchGameModel.rounds.push(round);
      this.refreshData();
    }
  }

  async editTeam1(): Promise<void> {
    console.log("edit team 1");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.pitchGameModel.team1;
    var closeData = await this.dialog.open(NewTeamDialogComponent, dialogConfig).afterClosed().toPromise();
    if (closeData) {
      this.pitchGameModel.team1 = closeData;
      console.log(closeData);
    }
  }

  async editTeam2(): Promise<void> {
    console.log("edit team 2");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.pitchGameModel.team2;
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
      if (closeData) {
        console.log(this.pitchGameModel.rounds);
        this.pitchGameModel.rounds.splice(this.pitchGameModel.rounds.indexOf(round), 1, closeData);
        console.log(this.pitchGameModel.rounds);
        console.log(closeData);
        this.dataSource = new MatTableDataSource(this.pitchGameModel.rounds);
      }
    });
    console.log(round);
  }

  

}
