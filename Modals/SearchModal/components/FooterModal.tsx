import Link from 'next/link';

const FooterModal: React.FC = () => {
  return (
    <div className="bg-primary-primary h-20 min-h-20 w-full box-border px-5 text-white font-bold flex items-center">
      <p className="flex-grow text-right text-lg box-border px-5 ">
        Ten acceso total !al precio más bajo!
      </p>
      <Link href="/premium">
        <a className="bg-purple-600 rounded-md py-3 px-9 font-extrabold hover:bg-purple-500">
          Ir a premium
        </a>
      </Link>
    </div>
  );
};

export default FooterModal;
