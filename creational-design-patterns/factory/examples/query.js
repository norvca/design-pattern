class JQuery {
  constructor(selector) {
    // selector implementation
  }

  append(node) {}

  // other methods
}

window.$ = function (selector) {
  return new JQuery(selector);
};

// Use
$('li');
$('div').append(node);
