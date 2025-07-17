import { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';
const { assetPrefix } = getConfig().publicRuntimeConfig;

export default function Document() {
  return (
    <Html>
      <Head>
      <link
        rel="stylesheet"
        href={`${assetPrefix}/styles/global.css`}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}