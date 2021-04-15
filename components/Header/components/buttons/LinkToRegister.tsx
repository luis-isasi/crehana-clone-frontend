import Link from 'next/link';

import { useUser } from 'context/contextUser';

const LinkToRegister = () => {
  const { user } = useUser();

  if (user === undefined || user) return null;

  return (
    <Link href="/register">
      <a className="border-white border-2 mx-1 py-2 px-6 hover:opacity-80 rounded-md text-base min-w-max">
        Pruébalo sin costo
      </a>
    </Link>
  );
};

export default LinkToRegister;
