import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { ScoreTableData, Round } from '../game-model.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  private scoreTableData: ScoreTableData = new ScoreTableData();
  dataSource: MatTableDataSource<Round> = new MatTableDataSource(this.scoreTableData.rounds);
  columnsToDisplay = ['team1col', 'team2col'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    console.log(this.dataSource);
  }

  appendRound(round: Round): void {
    if (round && round.team1effect != undefined) {
      this.scoreTableData.rounds.push(round);
      this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    }
  }

}
