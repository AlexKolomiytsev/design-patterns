import { Ship } from "./Ship";

export class ShipAdapter {
    constructor() {
        this._ship = new Ship();
    }

    turnLeft() {
        console.log(' --- TURN LEFT');
        this._ship.SetRudderAngleTo(-40);
        this._ship.SetSailAngle(6, 11);
    }

    turnRight() {
        console.log(' --- TURN RIGHT');
        this._ship.SetRudderAngleTo(40);
        this._ship.SetSailAngle(4, -10);
    }

    goForward() {
        //do something else to the _ship
    }

}
