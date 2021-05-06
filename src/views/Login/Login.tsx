import Link from '@Components/Links/Link';

import BtnFacebook from '@Components/buttons/BtnFacebook';
import BtnGoogle from '@Components/buttons/BtnGoogle';
import FormUser from '@Components/FormUser';
import { useUser } from '@Context/contextUser';

const Login: React.FC = () => {
  const { loginUser } = useUser();

  return (
    <>
      <div className="container-login-register">
        <p className="text-white font-extrabold w-full text-center text-2xl sm:text-4xl mb-1">
          Bienvenido de vuelta
        </p>
        <p className="text-white text-center mb-6">
          Que bueno verte otra vez :)
        </p>
        <div className="min-w-0 w-full max-w-xs">
          <BtnFacebook typeBtn="login" />
          <BtnGoogle typeBtn="login" />
          <FormUser typeForm="login" fetcher={loginUser} />
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
        <span className="text-green-500 font-bold text-base my-4">
          Olvidé mi contraseña
        </span>
      </div>
      <style global jsx>{`
        body {
          //bg-base-dark
          background-color: rgba(7, 14, 39, 1);
        }
      `}</style>
    </>
  );
};

export default Login;
