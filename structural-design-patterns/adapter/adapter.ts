interface Target {
  method(): void;
}

class Adaptee {
  oldMethod() {}
}

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}
  method() {}
}

// Client code supports classes that follow the Target interface
function client(target: Target) {
  console.log(target.method());
}

// Client can't work with adaptee
const adaptee = new Adaptee();

// Client can work with adapter
const adapter = new Adapter(adaptee);
client(adapter);
