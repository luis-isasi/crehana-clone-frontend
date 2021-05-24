export function fetcher({
  endpoint,
  method,
  data,
}: {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data: any;
}) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
