import { useContextAuth } from '@Context/contextAuth';

const BtnSignout = () => {
  const { signoutUser } = useContextAuth();

  return (
    <button
      onClick={signoutUser}
      className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3"
    >
      Cerrar sesión
    </button>
  );
};

export default BtnSignout;
