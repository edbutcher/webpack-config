import Http from './request';
import { Starships } from './interfaces/Starships.dto';

import './style.scss';
import PersonAbstract from './interfaces/IPerson.abstract';
import { IPerson } from './interfaces/IPerson.dto';
import { Person } from './Person';

const getStarships = async (): Promise<Starships> => {
  const url = 'https://swapi.co/api/starships';
  return await JSON.parse(await Http.get(url));
};

getStarships().then((starships): void => console.log(starships));

const data: IPerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'blond',
  skinColor: 'fair',
  eyeColor: 'blue',
  birthYear: '19BBY',
  gender: 'male',
  homeWorld: 'https://swapi.co/api/planets/1/',
  url: 'https://swapi.co/api/people/1/',
};

const transformData = ({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  homeWorld,
  url
}: IPerson) => ([
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  homeWorld,
  url
]);

const hero2Array = transformData(data);

const hero2: PersonAbstract = new Person(...hero2Array);
console.log(hero2);
console.log(hero2.name);
console.log(hero2.getInfo());
console.log(hero2.getName());
console.log(hero2.getHeight());
console.log(hero2.getGender());

const hero: PersonAbstract = new Person(
  'Luke Skywalker',
  '172',
  '77',
  'blond',
  'fair',
  'blue',
  '19BBY',
  'male',
  'https://swapi.co/api/planets/1/',
  'https://swapi.co/api/people/1/'
);
console.log(hero);
console.log(hero.name);
console.log(hero.getInfo());
console.log(hero.getName());
console.log(hero.getHeight());
console.log(hero.getGender());
