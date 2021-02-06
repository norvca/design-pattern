class Product {
  constructor(private name: string) {}

  init() {
    console.log('init');
  }
  fn1() {
    console.log('fn1');
  }
  fn2() {
    console.log('fn2');
  }
}

class Creator {
  create(name: string) {
    return new Product(name);
  }
}

const creator = new Creator();
const phone = creator.create('phone');
phone.init();
phone.fn1();
