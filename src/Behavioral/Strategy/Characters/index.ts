import Character from "./Character";
import {SwordBehavior, KnifeBehavior, AxeBehavior} from "./WeaponBehavior";

class King extends Character {
  constructor() {
    super();
    this.setWeapon(new SwordBehavior());
  }
}

class Knight extends Character {
  constructor() {
    super();
    this.setWeapon(new AxeBehavior())
  }
}

class Queen extends Character {
  constructor() {
    super();
    this.setWeapon(new KnifeBehavior())
  }
}

const king = new King();
const knight = new Knight();
const queen = new Queen();

king.fight();
knight.fight();
queen.fight();
