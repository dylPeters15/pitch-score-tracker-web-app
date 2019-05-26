export class Round {
  bidder: string = "";
  bidAmount: number = 5;
  team1effect: number = 5;
  team2effect: number = 5;
  constructor(team1effect?: number, team2effect?: number, bidder?: string, bidAmount?: number) {
    this.bidder = bidder || "";
    this.bidAmount = bidAmount || this.bidAmount;
    this.team1effect = team1effect || this.team1effect;
    this.team2effect = team2effect || this.team2effect;
  }
}

export class Team {
  teamName: string = "";
  player1: string = "";
  player2: string = "";
  constructor(teamName?: string, player1?: string, player2?: string) {
    this.teamName = teamName || "";
    this.player1 = player1 || "";
    this.player2 = player2 || "";
  }
}

export class PitchGameModel {
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

// @Injectable({
//   providedIn: 'root'
// })
// export class GameModelService {

//   constructor() { }
// }
