import { useRouter } from 'next/router';

const FormBtn: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="submit"
      className="bg-gray-400 font-bold rounded h-14 w-full px-5 mb-4 text-white"
    >
      {router.pathname === '/register' ? 'Regístrate' : 'Inicia sesión'}
    </button>
  );
};

export default FormBtn;
