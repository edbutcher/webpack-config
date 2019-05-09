import Http from './request';

export class SwapiService {
  getStarships(starshipNumber: number) {
    Http.get(`https://swapi.co/api/starships/${starshipNumber}`);
  }
}