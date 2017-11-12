import { WateryGod } from "./wateryGod";
import { AncientGod } from "./ancientGod";
import { DefaultGod } from "./defaultGod";

export class GodFactory {
    static build(godName) {
        if (godName === 'watery') return new WateryGod();
        if (godName === 'ancient') return new AncientGod();

        return new DefaultGod();
    }
}