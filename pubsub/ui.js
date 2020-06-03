import pubsub from './pubsub.js';

pubsub.on('peopleChanged', render);

function render(people) {
  const ul = document.querySelector('ul');
  const df = document.createDocumentFragment();

  people.forEach((name) => {
    const li = document.createElement('li');
    li.innerText = name;
    df.appendChild(li);
  });

  ul.innerHTML = '';
  ul.appendChild(df);
}
