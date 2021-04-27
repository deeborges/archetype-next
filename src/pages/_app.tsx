import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'noverde-ui/lib';

import LayoutGlobal from '../layout/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <Head>
          <title>Next.js archetype.</title>
          <link rel="shortcut icon" href="/assets/favicon.ico" />
          <link rel="apple-touch-icon" href="/assets/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            title="A simple project starter to work with TypeScript, React, Styled Components, Storybook and Next.js"
          />
        </Head>
        <LayoutGlobal />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
