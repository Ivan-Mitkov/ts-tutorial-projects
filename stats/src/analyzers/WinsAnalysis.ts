import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResults } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        teamWins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        teamWins++;
      }
    }
    return `${this.team} total wins: ${teamWins}`;
  }
}
