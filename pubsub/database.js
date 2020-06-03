import pubsub from './pubsub.js';

const people = [];

function addPerson(e) {
  e.preventDefault();
  const input = document.querySelector('input').value;
  people.push(input);

  pubsub.emit('peopleChanged', people);
}

function deletePerson(e) {
  const li = e.target.closest('li');
  const ul = document.querySelector('ul');
  const ulArr = Array.from(ul.children);
  const index = ulArr.indexOf(li);
  people.splice(index, 1);

  pubsub.emit('peopleChanged', people);
}

export { addPerson, deletePerson };
