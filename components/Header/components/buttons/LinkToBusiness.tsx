import Link from 'next/link';

const LinkToBusiness = () => {
  return (
    <Link href="/business">
      <a className="mx-3 p-2 lg:mx-1 xl:mx-3 min-w-max hover:opacity-80">
        Para empresas
      </a>
    </Link>
  );
};

export default LinkToBusiness;
