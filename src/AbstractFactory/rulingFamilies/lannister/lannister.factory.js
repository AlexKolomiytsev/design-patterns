import { KingJoffery } from "./kingJoffery";
import { LordTywin} from "./lordTywin";

export class LannisterFactory {
    getKing() {
        return new KingJoffery();
    }

    getHandOfTheKing() {
        return new LordTywin();
    }
}