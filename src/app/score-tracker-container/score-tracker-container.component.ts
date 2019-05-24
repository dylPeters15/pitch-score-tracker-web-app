import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewRoundDialogComponent } from '../new-round-dialog/new-round-dialog.component';

@Component({
  selector: 'app-score-tracker-container',
  templateUrl: './score-tracker-container.component.html',
  styleUrls: ['./score-tracker-container.component.css']
})
export class ScoreTrackerContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  plusClick() {
    console.log("click");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(NewRoundDialogComponent, dialogConfig);
  }

}
