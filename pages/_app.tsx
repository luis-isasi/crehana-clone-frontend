import type { AppProps } from 'next/app';

import '../Styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
