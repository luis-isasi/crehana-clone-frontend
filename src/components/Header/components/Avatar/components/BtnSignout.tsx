import { useUser } from '@Context/contextUser';

const BtnSignout = () => {
  const { signoutUser } = useUser();

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
