class Vnode {
  constructor(type, props, children) {
    // ...
  }
}

React.createElement = function (type, props, children) {
  return new Vnode(type, props, children);
};

// Use
React.createElement('li', { className: 'brown' }, 'Chocolate');
React.createElement('li', { className: 'white' }, 'Vanilla');
React.createElement('li', { className: 'yellow' }, 'Banana');
