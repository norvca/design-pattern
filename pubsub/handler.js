import { addPerson, deletePerson } from './people.js';

const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', addPerson);
ul.addEventListener('click', deletePerson);
