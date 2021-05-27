import { useRouter } from 'next/router';

import { useContextAuth } from '@Context/contextAuth';
import LoadingScreen from '@Components/LoadingScreen';

const ProtectRouteAuth = ({ children }) => {
  const router = useRouter();
  const { user } = useContextAuth();

  //get the current path
  const to = router.pathname;

  if (user === undefined) return <LoadingScreen />;

  if (user === null) {
    //pass the current
    router.push(`/login/?nextPage=${to}`);
  }

  return <>{children}</>;
};

export default ProtectRouteAuth;
