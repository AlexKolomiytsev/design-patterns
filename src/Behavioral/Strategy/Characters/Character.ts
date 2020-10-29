import {WeaponBehavior} from "./WeaponBehavior";

abstract class Character {
  private weapon: WeaponBehavior;

  fight = () => {
    this.weapon.useWeapon()
  }

  setWeapon = (weapon: WeaponBehavior) => {
    this.weapon = weapon;
  }
}

export default Character;
