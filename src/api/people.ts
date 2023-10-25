import { Person } from '../types/Person';
import { Response } from '../types/Response';
import { client } from '../utils/fetchClient';

export const getPeople = (page: number, limit: number) => {
  return client.get<Response>(`/table/?limit=${limit}&offset=${limit * page}`);
};

export const patchPerson = ({ id, name, email, address, birthday_date, phone_number }: Person) => {
  return client.put<Person>(`/table/${id}/`, { name, email, address, birthday_date, phone_number });
};