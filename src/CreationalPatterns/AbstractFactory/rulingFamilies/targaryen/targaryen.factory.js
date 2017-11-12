import { KingAerys } from "./kingAerys";
import { LordConnington } from "./lordConnington";

export class TargaryenFactory {
    getKing() {
        return new KingAerys();
    }

    getHandOfTheKing() {
        return new LordConnington();
    }
}