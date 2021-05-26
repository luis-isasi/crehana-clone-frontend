import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const isLoginOrRegister =
    router.pathname === '/login' || router.pathname === '/register';

  if (isLoginOrRegister) return null;

  return (
    <footer className="bg-base-main-80 min-h-60 w-full text-white flex justify-center items-center ">
      FOOTER
    </footer>
  );
};

export default Footer;
