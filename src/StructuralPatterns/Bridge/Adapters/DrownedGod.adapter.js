import { DrownedGod } from "../Gods/DrownedGod";

export class HumanSacrifice {constructor() {
    this.type = 'human sacrifice'
}}

export class DrownedGodAdapter {
    constructor() {
        this._drownedGod = new DrownedGod()
    }

    prayTo() {
        const sacrifice = new HumanSacrifice();

        this._drownedGod.prayTo(sacrifice.type);
    }
}