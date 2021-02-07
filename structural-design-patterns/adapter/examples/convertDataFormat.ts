interface treeData {
  name: string;
  relative?: treeData[];
}

interface flatData {
  name: string;
}

const treeData: treeData[] = [
  {
    name: 'Medina',
    relative: [
      { name: 'Rose' },
      {
        name: 'Washington',
        relative: [{ name: 'Murphy' }, { name: 'Sanders' }],
      },
    ],
  },
  { name: 'Alexander' },
  { name: 'James' },
];

function flatDataAdapter(treeData: treeData[], flatData: flatData[] = []) {
  treeData.map(person => {
    const { name } = person;
    flatData.push({ name });

    if (person.relative) {
      flatDataAdapter(person.relative, flatData);
    }
  });

  return flatData;
}

const flatData = flatDataAdapter(treeData);
