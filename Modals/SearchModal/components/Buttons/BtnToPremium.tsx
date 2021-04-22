import Link from 'next/link';

const BtnToPremium = () => {
  return (
    <Link href="/premium">
      <a className="bg-primary-main lg:bg-purple-600 text-white rounded-md py-3  px-7 lg:px-9 font-extrabold  hover:bg-primary-light lg:hover:bg-purple-500">
        Ir a premium
      </a>
    </Link>
  );
};

export default BtnToPremium;
