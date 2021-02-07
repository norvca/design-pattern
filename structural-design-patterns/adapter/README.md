# Adapter Pattern

## Intent
The Adapter Pattern Converts the interface of a class into another interface the clients expect

## Structure
![Adapter](../../pics/adapter.png)

## Structure code
```typescript
interface Target {
  method(): void;
}

class Adaptee {
  oldMethod() {}
}

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}

  method() {
    this.adaptee.oldMethod();
  }
}

// Client 
// Client code supports classes that follow the Target interface
function client(target: Target) {
  target.method();
  // ...
}

// Client can't work with adaptee
const adaptee = new Adaptee();

// Client can work with adapter
const adapter = new Adapter(adaptee);
client(adapter);
```

## Examples
[Convert data format](./examples/convertDataFormat.ts),  [Axios adapts XMLHttpRequest](https://github.com/axios/axios/blob/hotfix/0.21.1/lib/adapters/xhr.js)


