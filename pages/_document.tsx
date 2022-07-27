import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches';

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway|Titillium+Web"
          rel="stylesheet"
        ></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
