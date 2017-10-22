import { TournamentBuilder }            from "./tournament/builders/tournament.builder";
import { LannisterTournamentBuilder }   from "./tournament/builders/lannisterTournament.builder";
import { BaratheonTournamentBuilder }   from "./tournament/builders/baratheonTournament.builder";


const lannisterTournamen = new TournamentBuilder().build(new LannisterTournamentBuilder());
const baratheonTournament = new TournamentBuilder().build(new BaratheonTournamentBuilder());


console.log(lannisterTournamen);
console.log(baratheonTournament);
