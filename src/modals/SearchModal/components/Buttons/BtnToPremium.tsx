import Link from '@Components/Links/Link';

const BtnToPremium = () => {
  return (
    <Link
      href="/premium"
      className="bg-primary-main lg:bg-purple-600 text-white rounded-md py-3  px-7 lg:px-9 font-extrabold  hover:bg-primary-light lg:hover:bg-purple-500"
    >
      Ir a premium
    </Link>
  );
};

export default BtnToPremium;
