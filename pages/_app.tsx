import type { AppProps } from 'next/app';

import Header from 'components/Header';

import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className=" w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
