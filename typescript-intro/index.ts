import lodash from 'lodash';

const people = [
  {
      id: 1,
      name: 'Peter'
  },
  {
      id: 2,
      name: 'Rachel'
  },
  {
      id: 3,
      name: 'John'
  },
  {
      id: 4,
      name: 'Tim'
  },
  {
      id: 5,
      name: 'Zed'
  }
];

interface RandomKeys {
  [key: string]: Person
}

lodash.find(people, { id: 3 });