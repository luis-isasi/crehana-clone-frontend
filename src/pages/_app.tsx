import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { ContextAuthProvider } from '@Context/contextAuth';
import { ContextThemeProvider } from '@Context/contextTheme';
import Layout from '@Hoc/Layout';

import '../styles/global.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  enabledDark?: boolean;
  darkMode?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ContextThemeProvider>
          <ContextAuthProvider>
            <Layout
              darkMode={Component?.darkMode}
              enabledDark={Component?.enabledDark}
            >
              {getLayout(<Component {...pageProps} />)}
            </Layout>
          </ContextAuthProvider>
        </ContextThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
