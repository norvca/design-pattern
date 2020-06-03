import { addPerson, deletePerson } from './database.js';

const addBtn = document.querySelector('button');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', addPerson);
ul.addEventListener('click', deletePerson);
