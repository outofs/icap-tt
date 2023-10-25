import { LoginData } from '../types/Login';

export const login = (data: LoginData) => {
  const options: RequestInit = { method: 'POST' };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch('https://technical-task-api.icapgroupgmbh.com/api/login/', options);
};