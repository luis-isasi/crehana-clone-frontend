import FacebookIcon from '@material-ui/icons/Facebook';

interface PropsBtnFacebook {
  typeBtn: 'login' | 'register';
}

const BtnFacebook: React.FC<PropsBtnFacebook> = ({ typeBtn }) => {
  return (
    <button className="bg-blue-600 font-bold rounded h-14 w-full px-8 mb-3 text-white flex items-center">
      <FacebookIcon
        style={{
          fontSize: '28px',
        }}
      />
      <p className="ml-5 leading-tight">
        {' '}
        {typeBtn === 'login'
          ? 'Continuar con Facebook'
          : 'Regístrate con Facebook'}
      </p>
    </button>
  );
};

export default BtnFacebook;
