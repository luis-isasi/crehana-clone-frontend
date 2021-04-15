import Link from 'next/link';

const LinkToPremium = () => {
  return (
    <Link href="/premium">
      <a className=" px-5 min-w-max hover:opacity-80">Vuélvete Premium</a>
    </Link>
  );
};

export default LinkToPremium;
