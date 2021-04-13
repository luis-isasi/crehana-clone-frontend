import Link from 'next/link';
import BtnFacebook from 'components/BtnFacebook';
import BtnGoogle from 'components/BtnGoogle';
import FormUser from 'components/FormUser';

const Login: React.FC = () => {
  return (
    <div className="container-login-register">
      <p className="text-white font-extrabold w-full text-center text-2xl sm:text-4xl mb-1">
        Bienvenido de vuelta
      </p>
      <p className="text-white text-center mb-6">Que bueno verte otra vez :)</p>
      <div className="min-w-0 w-full max-w-xs">
        <BtnFacebook typeBtn="login" />
        <BtnGoogle typeBtn="login" />
        <FormUser typeForm="login" />
      </div>
      <div className="mt-5">
        <span className="text-white text-xs">
          ¿Aún no tienes una cuenta?
          <Link href="/register">
            <a className="text-green-500 font-semibold ml-2">Regístrate</a>
          </Link>
        </span>
      </div>
      <span className="text-green-500 font-bold text-base my-4">
        Olvidé mi contraseña
      </span>
    </div>
  );
};

export default Login;
