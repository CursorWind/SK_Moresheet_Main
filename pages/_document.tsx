import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          content="#d8e6ef"
          media="(prefers-color-scheme: light)"
          key="theme-light"
        />
        <meta
          name="theme-color"
          content="#27353d"
          media="(prefers-color-scheme: dark)"
          key="theme-dark"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
