export interface FlyBehavior {
  fly(): void
}

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('Flying with wings');
  }
}

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('I can`t fly!');
  }
}


