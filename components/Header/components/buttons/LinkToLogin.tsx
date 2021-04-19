import Link from 'next/link';

const LinkToLogin = () => {
  return (
    <Link href="/login">
      <a className="mx-3 p-2 min-w-max hover:opacity-80">Ingresar</a>
    </Link>
  );
};

export default LinkToLogin;
