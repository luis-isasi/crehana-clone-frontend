import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextUserProvider } from 'context/contextUser';
import Header from 'components/Header';

import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ContextUserProvider>
        <div className=" w-screen h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </ContextUserProvider>
    </QueryClientProvider>
  );
};

export default App;
