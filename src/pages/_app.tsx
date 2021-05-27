import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextAuthProvider } from '@Context/contextAuth';
import { ContextThemeProvider } from '@Context/contextTheme';
import { ProtecRouteAuth } from '@Context/contextAuth';

import Header from '@Components/Header';
import Footer from '@Components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ContextThemeProvider>
        <ContextAuthProvider>
          {Component.requireAuth ? (
            <ProtecRouteAuth>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </ProtecRouteAuth>
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </ContextAuthProvider>
      </ContextThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
