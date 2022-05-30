import type { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <title>Formula 1</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
