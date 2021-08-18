import { USER_SESSION } from '@Constans';

//FETCHER
export async function fetcher<DataResponse>({
  endpoint,
  method = 'GET',
  body,
}: {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}) {
  let headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (typeof window !== 'undefined') {
    //TODO: agregar un type para user session
    let token: string | undefined = '';

    try {
      //only there's a token in local storage
      const tokenFromLS = window.localStorage.getItem(USER_SESSION);
      token = JSON.parse(tokenFromLS)?.token;
    } catch (err) {
      console.error(err);
      token = '';
    }
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

  let res: { data: any } = await response.json();

  //no necesitamos retornar todo el objeto de error ya que react-query solo necesita el mensaje de error
  //quizas en otro proyecto sin react-query, si, se deba retornar
  // if (!response.ok) {
  //   const resError: MyResponseError = res.data;
  //   throw new Error(resError.error);
  // }

  type MyResponse = DataResponse & {
    error?: string;
  };

  return res.data as MyResponse;
}
