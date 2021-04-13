import Link from 'next/link';
import BtnFacebook from 'components/BtnFacebook';
import BtnGoogle from 'components/BtnGoogle';
import FormUser from 'components/FormUser';

const Register: React.FC = () => {
  return (
    <div className="container-login-register">
      <p className="text-white font-extrabold text-4xl mb-1">Únete hoy</p>
      <p className="text-white mb-6 text-center">
        Empieza tu camino de aprendizaje
      </p>
      <div className="min-w-0 w-full max-w-xs">
        <BtnFacebook typeBtn="register" />
        <BtnGoogle typeBtn="register" />
        <FormUser typeForm="register" />
      </div>
      <div className="flex items-center text-white mt-5">
        <input type="checkbox" className="mx-2" />
        <p className="text-xs text-gray-400">
          <strong className="text-white">Acepto los</strong> Términos,
          Condiciones y Políticas de Crehana.
        </p>
      </div>
      <div className="mt-7">
        <span className="text-white text-xs">
          ¿Ya tienes una cuenta?
          <Link href="/login">
            <a className="text-green-500 font-semibold ml-2">Inicia sesión</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
