import {OldGodAdapter} from "./Adapters/OldGod.adapter";
import {DrownedGodAdapter} from "./Adapters/DrownedGod.adapter";
import {SevenGodAdapter} from "./Adapters/SevenGod.adapter";

const oldGod = new OldGodAdapter();
const drownedGod = new DrownedGodAdapter();
const sevenGod = new SevenGodAdapter();

const gods = [oldGod, drownedGod, sevenGod];

gods.forEach((god) => god.prayTo());