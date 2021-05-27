import { USER_SESSION } from '@Constans';

export async function fetcher<DataResponse>({
  endpoint,
  method = 'GET',
  body,
}: {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}) {
  //TODO: agregar un type para user session
  const tokenFromLS = window.localStorage.getItem(USER_SESSION);

  let token: string | undefined = '';
  try {
    token = JSON.parse(tokenFromLS)?.token;
  } catch (err) {
    console.error(err);

    token = '';
  }

  let headers: { [key: string]: string } = {
    'content-type': 'application/json',
  };

  //only there's a token in local storage
  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
    {
      method: method,
      body: JSON.stringify(body),
      headers,
    }
  );

  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.data.error as string);
  }

  return data as DataResponse;
}
