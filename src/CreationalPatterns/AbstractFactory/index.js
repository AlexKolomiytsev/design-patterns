import { CourtSession } from "./court/courtSession";

import { LannisterFactory } from "./rulingFamilies/lannister/lannister.factory";
import { TargaryenFactory } from "./rulingFamilies/targaryen/targaryen.factory";

const courtSession1 = new CourtSession(new LannisterFactory());
courtSession1.complainPresented({ severity: 5 });
courtSession1.complainPresented({ severity: 30 });

const courtSession2 = new CourtSession(new TargaryenFactory());
courtSession2.complainPresented({ severity: 15 });
courtSession2.complainPresented({ severity: 1 });