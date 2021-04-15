import Link from 'next/link';

const LinkToLogin = () => {
  return (
    <Link href="/login">
      <a className=" px-5 min-w-max hover:opacity-80">Ingresar</a>
    </Link>
  );
};

export default LinkToLogin;
