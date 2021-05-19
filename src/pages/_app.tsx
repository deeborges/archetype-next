import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}

export default App;
