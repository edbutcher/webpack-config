import { Starship } from './Starship';

export interface Starships {
  count: number;
  next: string;
  previous: string | null;
  results: Starship[];
};
