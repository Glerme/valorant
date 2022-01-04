import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <meta name="theme-color" content="#000000" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="NextJS Start Project" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="NextJS Start Project" />

          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
