import { QuackBehavior } from "./QuackBehavior";
import { FlyBehavior } from "./FlyBehavior";

abstract class Duck {
  private quackBehavior: QuackBehavior;
  private flyBehavior: FlyBehavior;

  swim = () => {
    console.log('Every duck can swim');
  }

  abstract display(): void

  performQuack = () => {
    this.quackBehavior.quack();
  }

  performFly = () => {
    this.flyBehavior.fly();
  }

  setFlyBehavior = (flyBehavior: FlyBehavior) => {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior = (quackBehavior: QuackBehavior) => {
    this.quackBehavior = quackBehavior;
  }
}

export default Duck;
