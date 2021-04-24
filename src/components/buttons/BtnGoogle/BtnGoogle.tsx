import Image from 'next/image';

interface PropsBtnGoogle {
  typeBtn: 'login' | 'register';
}

const BtnGoogle: React.FC<PropsBtnGoogle> = ({ typeBtn }) => {
  return (
    <button className="bg-white font-bold rounded h-14 w-full px-8 mb-3 flex items-center">
      <Image src="/images/google.png" width={28} height={28} />
      <p className="ml-5">
        {' '}
        {typeBtn === 'login'
          ? 'Continuar con Facebook'
          : 'Regístrate con Facebook'}
      </p>
    </button>
  );
};

export default BtnGoogle;
