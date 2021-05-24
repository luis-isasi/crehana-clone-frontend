import { useState } from 'react';
import Link from '@Components/Links/Link';
import CheckIcon from '@material-ui/icons/Check';

import BtnFacebook from '@Components/buttons/BtnFacebook';
import BtnGoogle from '@Components/buttons/BtnGoogle';
import FormUser from '@Components/FormUser';
import { useContextUser } from '@Context/contextUser';

const Register: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { registerUser } = useContextUser();

  return (
    <>
      <div className="container-login-register">
        <p className="text-white font-extrabold text-4xl mb-1">Únete hoy</p>
        <p className="text-white mb-6 text-center">
          Empieza tu camino de aprendizaje
        </p>
        <div className="min-w-0 w-full max-w-xs">
          <BtnFacebook typeBtn="register" />
          <BtnGoogle typeBtn="register" />
          <FormUser
            typeForm="register"
            fetcher={registerUser}
            isChecked={isChecked}
          />
        </div>
        <div className="flex items-center text-white mt-5">
          <div
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            className={`w-5 h-5 flex justify-center items-center p-2 rounded-sm mx-2 ${
              isChecked ? 'bg-green-300 ' : 'bg-transparent border border-white'
            }`}
          >
            {isChecked ? <CheckIcon style={{ fontSize: '18px' }} /> : null}
          </div>
          <p className="text-xs text-gray-400">
            <strong className="text-white">Acepto los</strong> Términos,
            Condiciones y Políticas de Crehana.
          </p>
        </div>
        {!isChecked && (
          <span className="text-red-500 text-xs my-2">
            Debes aceptar los Términos, Condiciones y Políticas para continuar.
          </span>
        )}
        <div className="mt-7">
          <span className="text-white text-xs">
            ¿Ya tienes una cuenta?
            <Link
              href="/login"
              className="text-green-500 font-semibold ml-2"
              text="Inicia sesión"
            />
          </span>
        </div>
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

export default Register;
