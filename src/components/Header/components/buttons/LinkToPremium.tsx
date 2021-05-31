import Link from 'next/link';

const LinkToPremium = () => {
  return (
    <Link href="/premium">
      <a className="min-w-max mx-3 lg:mx-1 xl:mx-3 p-2 min-w-max hover:opacity-80">
        Vuélvete Premium
      </a>
    </Link>
  );
};

export default LinkToPremium;
