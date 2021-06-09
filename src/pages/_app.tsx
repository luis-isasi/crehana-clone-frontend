import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextAuthProvider } from '@Context/contextAuth';
import { ContextThemeProvider } from '@Context/contextTheme';
import ProtectRouteAuth from '@Hoc/ProtectRouteAuth';

import Layout from '@Hoc/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ContextThemeProvider>
        <ContextAuthProvider>
          {pageProps.requireAuth ? (
            <ProtectRouteAuth>
              <Layout dark={pageProps.dark}>
                <Component {...pageProps} />
              </Layout>
            </ProtectRouteAuth>
          ) : (
            <>
              <Layout dark={pageProps.dark}>
                <Component {...pageProps} />
              </Layout>
            </>
          )}
        </ContextAuthProvider>
      </ContextThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
