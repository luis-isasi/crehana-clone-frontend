import { useRouter } from 'next/router';

import { StateForm } from '../types';

interface PropsBtn {
  stateForm: StateForm;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  isDisabled: () => boolean;
}

const Btn: React.FC<PropsBtn> = ({ stateForm, onSubmit, isDisabled }) => {
  const router = useRouter();

  return (
    <button
      type="submit"
      disabled={isDisabled()}
      className="bg-gray-400 font-bold rounded h-14 w-full px-5 mb-4 text-white disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {router.pathname === '/register' ? 'Regístrate' : 'Inicia sesión'}
    </button>
  );
};

export default Btn;
