import Header from '@Components/Header';
import Footer from '@Components/Footer';

interface Props {
  dark?: boolean;
}

const Layout: React.FC<Props> = ({ dark, children }) => {
  return (
    <div className={`${dark && 'dark bg-base-main'} w-full h-auto`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
