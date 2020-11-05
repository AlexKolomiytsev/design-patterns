export interface Observer {
  update(subject: Subject, arg?: Object): void;
}

export interface Subject {
  setChanged(): void;
  notify(arg?: Object): void;
  attachListener(observer: Observer): void;
  removeListener(observer: Observer): void;
}
