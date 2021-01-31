export interface Observer {
  update(): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export interface DisplayElement {
  display(): void;
}
