/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://technical-task-api.icapgroupgmbh.com/api';

type RequestMethod = 'GET' | 'POST' | 'PUT';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options).then(response => response.json());
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  put: <T>(url: string, data: any) => request<T>(url, 'PUT', data),
};