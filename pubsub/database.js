const people = [];

function addPerson(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  people.push(input.value);
  input.value = '';

  return people;
}

function deletePerson(e) {
  const li = e.target.closest('li');
  const ul = document.querySelector('ul');
  const ulArr = Array.from(ul.children);
  const index = ulArr.indexOf(li);
  people.splice(index, 1);

  return people;
}

export { addPerson, deletePerson };
