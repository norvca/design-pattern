import db from './db-interface.js';

const addBtn = document.querySelector('button');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', db.addPerson);
ul.addEventListener('click', db.deletePerson);
