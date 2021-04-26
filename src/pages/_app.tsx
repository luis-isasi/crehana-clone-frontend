import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextUserProvider } from '@Context/contextUser';
import Header from '@Components/Header';

import '../../styles/tailwind.css';
import '../../styles/tailwind-build.css';

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
