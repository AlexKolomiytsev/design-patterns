import { Tournament } from "../tournament";

import { Event} from "../entities/event";
import { Attendee } from "../entities/attendee";
import { Prize } from "../entities/prize";

export class LannisterTournamentBuilder {

    build() {
        const tournament = new Tournament();

        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("Melee"));

        tournament.attendees.push(new Attendee('Jamie'));

        tournament.prizes.push(new Prize("Gold"));
        tournament.prizes.push(new Prize("More Gold"));

        return tournament;
    }
}