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
    this.scoreTableData.rounds.push(new Round(5,-5));
    this.scoreTableData.rounds.push(new Round(1,-3));
    this.scoreTableData.rounds.push(new Round(2,-2));
    this.scoreTableData.rounds.push(new Round(3,-1));
    this.dataSource = new MatTableDataSource(this.scoreTableData.rounds);
    console.log(this.dataSource);
  }

}
