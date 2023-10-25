import { Person } from '../types/Person';
import { Response } from '../types/Response';
import { client } from '../utils/fetchClient';

export const getPeople = (page: number, limit:number) => {
  return client.get<Response>(`/table/?limit=${limit}&offset=${limit * page}`);
};

export const createPerson = (data: Omit<Person, 'id'>) => {
  return client.post<Person>('/table/', data);
};

export const deletePerson = (personId: number) => {
  return client.delete(`/table/${personId}/`);
};