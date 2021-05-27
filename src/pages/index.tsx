import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useContextAuth } from '@Context/contextAuth';

const Index: React.FC = () => {
  const { user } = useContextAuth();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/home');
  }, [user]);

  return (
    <>
      <style global jsx>{`
        body {
          //bg-base-dark
          background-color: rgba(7, 14, 39, 1);
        }

        header {
          //bg-base-main
          background-color: rgba(24, 27, 50, 1) !important;
        }

        header > :global(*) {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Index;
