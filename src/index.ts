// import Http from './request';
// import { Starships } from './interfaces/Starships.dto';

import './style.scss';
import PersonAbstract from './interfaces/IPerson.abstract';
import { IPerson } from './interfaces/IPerson.dto';
import { Person } from './Person';

// const getStarships = async (): Promise<Starships> => {
//   const url = 'https://swapi.co/api/starships';
//   const starships: Promise<Starships> = JSON.parse(await Http.get(url));

//   return starships;
// };

// getStarships().then((starships): void => console.log(starships));

const data: IPerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'blond',
  skinColor: 'fair',
  eyeColor: 'blue',
  birthYear: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  url: 'https://swapi.co/api/people/1/',
};

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
