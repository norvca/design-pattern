import { addPerson, deletePerson } from './database.js';
import pubsub from './pubsub.js';

const db = {
  addPerson(e) {
    const result = addPerson(e);
    pubsub.emit('peopleChanged', result);
  },
  deletePerson(e) {
    const result = deletePerson(e);
    pubsub.emit('peopleChanged', result);
  },
};

export default db;
