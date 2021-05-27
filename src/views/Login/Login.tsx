import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from '@Components/Links/Link';
import BtnFacebook from '@Components/buttons/BtnFacebook';
import BtnGoogle from '@Components/buttons/BtnGoogle';
import FormUser from '@Components/FormUser';
import authService from '@Services/auth';
import { useContextAuth } from '@Context/contextAuth';

const Login: React.FC = () => {
  const { user } = useContextAuth();
  const router = useRouter();
  //get the next page
  const nextPage = router.query?.nextPage || '/home';

  useEffect(() => {
    user && router.replace(`${nextPage}`);
  }, [user]);

  const onSuccess = () => {
    router.push(`${nextPage}`);
  };

  const onError = () => {
    console.log('on error');
  };

  return (
    <>
      <div className=" container-login-register">
        <p className="text-white font-extrabold w-full text-center text-2xl sm:text-4xl mb-1">
          Bienvenido de vuelta
        </p>
        <p className="text-white text-center mb-6">
          Que bueno verte otra vez :)
        </p>
        <div className="min-w-0 w-full max-w-xs">
          <BtnFacebook typeBtn="login" />
          <BtnGoogle typeBtn="login" />
          <FormUser
            typeForm="login"
            mutation={authService.loginUser}
            onSuccess={onSuccess}
            onError={onError}
          />
        </div>
        <div className="mt-5">
          <span className="text-white text-xs">
            ¿Aún no tienes una cuenta?
            <Link
              href="/register"
              className="text-green-500 font-semibold ml-2"
              text="Regístrate"
            />
          </span>
        </div>
        <span className="text-green-500 font-bold text-base my-4 ">
          Olvidé mi contraseña
        </span>
      </div>
      <style global jsx>{`
        header {
          //bg-base-main
          background-color: rgba(24, 27, 50, 1) !important;
        }
      `}</style>
    </>
  );
};

export default Login;
