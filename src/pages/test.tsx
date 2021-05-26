import { useQuery } from 'react-query';

const Test = () => {
  function request<TResponse>(url: string): Promise<TResponse> {
    // Inside, we call the `fetch` function with
    // a URL and config given:
    return (
      fetch(url)
        // When got a response call a `json` method on it
        .then((response) => response.json())
        // and return the result data.
        .then((data) => data as TResponse)
    );

    // We also can use some post-response
    // data-transformations in the last `then` clause.
  }

  request<{ name: string; lastname: string; edad: number }>(
    '/api/users/42'
  ).then((user) => {
    // Now, however, a `user` variable has the `User` type.
  });

  // const { data } = useQuery(() =>
  //   request<{ name: string; edad: number }>('/api/users/42')
  // );

  fcn_2();
  return (
    <div className="h-76 w-full bg-blue-500">
      <img src={'https://n9.cl/g0on'} />
    </div>
  );
};

const fcn_1 = () => {
  console.log('F1');

  return () => {
    console.log('F2');

    return () => {
      console.log('F3');

      return () => {
        console.log('HOLA ');
      };
    };
  };
};

const fcn_2 = () => {
  console.log('F1');

  return fcn_1();
};

export default Test;
