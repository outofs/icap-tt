import { Person } from './Person';

export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}