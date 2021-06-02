import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextAuthProvider } from '@Context/contextAuth';
import { ContextThemeProvider } from '@Context/contextTheme';
import ProtectRouteAuth from '@Hoc/ProtectRouteAuth';

import Header from '@Components/Header';
import Footer from '@Components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();

  console.log(Component.requireAuth);

  return (
    <QueryClientProvider client={client}>
      <ContextThemeProvider>
        <ContextAuthProvider>
          {Component.requireAuth ? (
            <ProtectRouteAuth>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </ProtectRouteAuth>
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
