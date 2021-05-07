import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextUserProvider } from '@Context/contextUser';
import { ContextThemeProvider } from '@Context/contextTheme';

import Header from '@Components/Header';
import Footer from '@Components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ContextThemeProvider>
        <ContextUserProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ContextUserProvider>
      </ContextThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
