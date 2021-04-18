const useFetch = () => {
  return (endpoint: string, method: string, data: any) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
      method: method,
      body: JSON.stringify(data),
    }).then((data) => data.json());
};

export default useFetch;
