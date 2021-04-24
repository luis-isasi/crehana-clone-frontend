import Link from 'next/link';

const LinkToRegister = () => {
  return (
    <Link href="/register">
      <a className="border-white border-2 mx-1 py-2 px-6 hover:opacity-80 rounded-md text-base min-w-max">
        Pruébalo sin costo
      </a>
    </Link>
  );
};

export default LinkToRegister;
