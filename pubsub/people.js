import pubsub from './pubsub.js';

const input = document.querySelector('input');

let people = [];

function addPerson(e) {
  e.preventDefault();
  const name = input.value;
  input.value = '';

  let nameArr = new Set(people);
  nameArr.add(name);
  people = Array.from(nameArr);

  pubsub.emit('peopleChanged', people);
}

function deletePerson(e) {
  const li = e.target.closest('li');
  const name = li.textContent;

  people = people.filter((n) => n !== name);
  pubsub.emit('peopleChanged', people);
}

export { addPerson, deletePerson };
