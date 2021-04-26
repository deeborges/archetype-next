import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import Head from 'next/head';

import LayoutGlobal from 'layout/global';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../layout/tokens';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme.default}>
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
        <NextNprogress
          color={Theme.default.colors.allColors.noverde}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
