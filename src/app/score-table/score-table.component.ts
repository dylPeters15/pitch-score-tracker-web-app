import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

class Round {
  team1effect: number = 0;
  team2effect: number = 0;
  constructor(team1effect: number, team2effect: number) {
    this.team1effect = team1effect;
    this.team2effect = team2effect;
  }
}

class ScoreTableData {
  rounds: Round[] = [];
  getTeam1Score(): number {
    var team1score: number = 0;
    for (let round of this.rounds) {
      team1score += round.team1effect;
    }
    return team1score;
  }
  getTeam2Score(): number {
    var team2score: number = 0;
    for (let round of this.rounds) {
      team2score += round.team2effect;
    }
    return team2score;
  }
}

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
