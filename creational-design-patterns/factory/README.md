# Factory Pattern

## Intent
The Factory Pattern let a **Creator** that produces **products** with a generic interface, which is not required to use the `new` keyword

## Structure
![Factory](../../pics/factory.png)

## Structure code
```typescript
interface Product {
  name: string;
  fn(): void;
}

class ProductA implements Product {
  constructor(public name: string = 'ProductA') {}
  fn() {}
}

class ProductB implements Product {
  constructor(public name: string = 'ProductB') {}
  fn() {}
}

class Creator {
  create(name: string): Product {
    switch (name) {
      case 'ProductA':
        return new ProductA();
      case 'ProductB':
        return new ProductB();
      default:
        throw new Error('No other products...');
    }
  }
}

let creator = new Creator();
const productA = creator.create('ProductA');
const productB = creator.create('ProductB');
```


## Examples
[Jquery selector](./examples/query.js), [React.createElement](.,/../examples/createElement.js)