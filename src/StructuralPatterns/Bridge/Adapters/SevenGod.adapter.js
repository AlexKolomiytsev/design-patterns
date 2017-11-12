import { SevenGod } from "../Gods/SevenGod";

export class PrayerPurposeProvider {
    getPurpose() { return 'some purpose' }
}

export class SevenGodAdapter {
    constructor() {
        this._sevenGod = new SevenGod();
        this.prayerPurposeProvider = new PrayerPurposeProvider();
    }

    prayTo() {
        const purpose = this.prayerPurposeProvider.getPurpose();

        this._sevenGod.prayTo(purpose);
    }
}