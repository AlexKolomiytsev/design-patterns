import { OldGod } from "../Gods/OldGod";

export class Sacrifice {constructor() {
    this.type = 'sacrifice';
}}

export class OldGodAdapter {
    constructor() {
        this._oldGod = new OldGod();
    }

    prayTo() {
        const sacrifice = new Sacrifice();

        this._oldGod.prayTo(sacrifice.type);
    }

}