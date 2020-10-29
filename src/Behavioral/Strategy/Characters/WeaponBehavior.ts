export interface WeaponBehavior {
  useWeapon(): void;
}

export class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use knife');
  }
}

export class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use axe');
  }
}

export class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('use sword');
  }
}
