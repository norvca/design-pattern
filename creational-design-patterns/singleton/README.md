# Singleton Pattern

## Intent
The Singleton Pattern ensures a class has **only one instance**, and provides a global point of access to it.

## Structure
![Singleton](../../pics/singleton.png)

## Structure code
```typescript
// Class version
class Single {
  private static instance: Single;

  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single();
    }

    return Single.instance;
  }
}

const single1 = Single.getInstance();
const single2 = Single.getInstance();
single1 === single2;

// ------------------------------  //
// Closure version
class Sole {}
const SoleInstance = (function () {
  let instance: null | Sole = null;

  return function () {
    if (!instance) {
      instance = new Sole();
    }

    return instance;
  };
})();

const sole1 = SoleInstance();
const sole2 = SoleInstance();
sole1 === sole2;
```

## Examples
[Login form](./examples/loginForm.html), `Store` in `vuex` and `redux`


