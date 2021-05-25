import { USER_SESSION } from '@Constans';

export function fetcher({
  endpoint,
  method = 'GET',
  body,
}: {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}) {
  return async () => {
    const token = JSON.parse(window.localStorage.getItem(USER_SESSION)).token;
    let headers: any = { 'content-type': 'application/json' };

    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }

    console.log({ headers });

    let response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
      {
        method: method,
        body: JSON.stringify(body),
        headers,
      }
    );

    let data = await response.json();

    if (!response.ok) {
      throw new Error(data.data.error);
    }
    return data;
  };
}
