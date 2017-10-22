import { GodFactory } from "../gods/god.factory";

export class Prayer {
    pray(godName) {
        GodFactory.build(godName).prayTo();
    }
}