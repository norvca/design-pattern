import pubsub from './pubsub.js';

pubsub.on('peopleChanged', render);

function render(people) {
  const count = document.querySelector('span');
  count.innerHTML = people.length;
}
