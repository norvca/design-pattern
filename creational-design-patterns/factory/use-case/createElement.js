class Vnode {
  constructor(type, props, children) {
    // ...
  }
}

React.createElement = function (type, props, children) {
  return new Vnode(type, props, children);
};
