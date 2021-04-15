import Link from 'next/link';

const LinkToBusiness = () => {
  return (
    <Link href="/business">
      <a className="px-5 min-w-max hover:opacity-80">Para empresas</a>
    </Link>
  );
};

export default LinkToBusiness;
