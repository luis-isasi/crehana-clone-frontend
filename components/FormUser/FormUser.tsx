import { useRouter } from 'next/router';

import style from './style.module.css';

interface PropsFormUser {
  typeForm: 'login' | 'register';
}

const FormUser: React.FC<PropsFormUser> = ({ typeForm }) => {
  const router = useRouter();

  return (
    <form className="flex flex-col w-full mt-4 ">
      <div className={`${style.formRow}`}>
        <label className={`${style.formLabel}`}>Correo</label>
        <input className={`${style.formInput}`} />
      </div>
      <div className={`${style.formRow}`}>
        <label className={`${style.formLabel}`}>Contraseña</label>
        <input className={`${style.formInput}`} />
      </div>
      <button className={`${style.formBtn}`}>
        {router.pathname === '/register' ? 'Regístrate' : 'Inicia sesión'}
      </button>
    </form>
  );
};

export default FormUser;
