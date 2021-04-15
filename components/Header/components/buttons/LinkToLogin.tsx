import Link from 'next/link';

import { useUser } from 'context/contextUser';

const LinkToLogin = () => {
  const { user } = useUser();

  if (user === undefined || user) return null;

  return (
    <Link href="/login">
      <a className=" px-5 min-w-max hover:opacity-80">Ingresar</a>
    </Link>
  );
};

export default LinkToLogin;
