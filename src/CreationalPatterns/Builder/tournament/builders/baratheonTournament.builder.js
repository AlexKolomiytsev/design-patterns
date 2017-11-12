import { Tournament } from "../tournament";

import { Event} from "../entities/event";
import { Attendee } from "../entities/attendee";
import { Prize } from "../entities/prize";

export class BaratheonTournamentBuilder {

    build() {
        const tournament = new Tournament();

        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("Melee"));

        tournament.attendees.push(new Attendee('Stannis'));
        tournament.attendees.push(new Attendee('Robbert'));

        tournament.prizes.push(new Prize("Gold 2"));
        tournament.prizes.push(new Prize("More Gold 2"));

        return tournament;
    }
}