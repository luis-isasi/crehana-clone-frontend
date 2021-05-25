import { USER_SESSION } from '@Constans';

export function fetcher<DataResponse>({
  endpoint,
  method,
  data,
}: {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data: any;
}) {
  const token = JSON.parse(window.localStorage.getItem(USER_SESSION));

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
  });
}
