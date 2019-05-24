import { Injectable } from '@angular/core';

export class Round {
  team1effect: number = 0;
  team2effect: number = 0;
  constructor(team1effect?: number, team2effect?: number) {
    this.team1effect = team1effect || 0;
    this.team2effect = team2effect || 0;
  }
}

export class Team {
  teamName: string = "";
  player1: string = "";
  player2: string = "";
}

export class ScoreTableData {
  team1: Team = new Team();
  team2: Team = new Team();
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

@Injectable({
  providedIn: 'root'
})
export class GameModelService {

  constructor() { }
}
