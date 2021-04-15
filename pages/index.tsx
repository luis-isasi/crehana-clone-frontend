import { useQuery, useMutation, QueryClient } from 'react-query';

const Index: React.FC = () => {
  const client = new QueryClient();
  // const info = useQuery('obtenerPersonajes', () =>
  //   fetch('https://rickandmortyapi.com/api/character').then((res) => res.json())
  // );

  // const { data } = info;

  // console.log({ data });

  const handleClick = async () => {
    // console.log(info.);
    const data = await client.fetchQuery('obtenerPersonajes', () =>
      fetch('https://rickandmortyapi.com/api/character').then((res) =>
        res.json()
      )
    );

    console.log({ data });
  };
  return (
    <>
      <div className="bg-green-400 w-full h-20 flex justify-around items-center"></div>

      <button
        onClick={handleClick}
        className="border border-gray-700 bg-red-700"
      >
        Click
      </button>
    </>
  );
};

export default Index;
