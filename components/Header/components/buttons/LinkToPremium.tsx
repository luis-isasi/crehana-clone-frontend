import Link from 'next/link';

const LinkToPremium = () => {
  return (
    <Link href="/login">
      <a className=" px-5 min-w-max">Vuélvete Premium</a>
    </Link>
  );
};

export default LinkToPremium;
