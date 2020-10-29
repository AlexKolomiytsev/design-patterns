
/**
 *  :: Strategy pattern ::
 * Declares a family of algorithms, encapsulates every of them
 * and ensures interchangeability.
 * Allows modification of any of the algorithm independently from client's usage
 **/

import Duck from "./Duck";
import { FlyWithWings } from "./FlyBehavior";
import { Quack, Squeak } from "./QuackBehavior";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyWithWings());
    this.setQuackBehavior(new Quack());
  }

  display() {
    console.log("I'm a mallard duck");
  }
}

const mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();
mallardDuck.setQuackBehavior(new Squeak());
mallardDuck.performQuack();
