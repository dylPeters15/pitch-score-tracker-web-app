import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team } from '../game-model.service';

@Component({
  selector: 'app-new-team-dialog',
  templateUrl: './new-team-dialog.component.html',
  styleUrls: ['./new-team-dialog.component.css']
})
export class NewTeamDialogComponent implements OnInit {

  team: Team = new Team();

  constructor(private dialogRef: MatDialogRef<NewTeamDialogComponent>, @Inject(MAT_DIALOG_DATA) public initData: Team) {
    this.team = new Team(initData.teamName, initData.player1, initData.player2);
  }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close(this.team);
  }

  cancel(): void {
    this.dialogRef.close(this.initData);
  }

}
