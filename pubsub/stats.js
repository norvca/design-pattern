import pubsub from './pubsub.js';

pubsub.on('peopleChanged', countPeople);

function countPeople(num) {
  const peopleNum = document.querySelector('span');
  peopleNum.innerText = num.length;
}
