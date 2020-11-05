import { Observer, Subject } from "./types";

class Observable implements Subject {
  private isChanged: boolean = false;
  private listeners: Observer[] = [];

  public setChanged() {
    this.isChanged = true;
  }

  public attachListener(observer: Observer): void {
    const hasListener = this.listeners.includes(observer);

    if (!hasListener) {
      this.listeners = [...this.listeners, observer];
    }
  }

  public removeListener(observer: Observer) {
    this.listeners = this.listeners.filter(listener => listener !== observer);
  }

  public notify(arg?: Object) {
    if (this.isChanged) {
      this.listeners.forEach(listener => listener.update(this, arg))
      this.isChanged = false;
    }
  }
}

export default Observable;
