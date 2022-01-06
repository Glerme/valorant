import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />

          <link
            rel="shortcut icon"
            href="/LogoValorant.svg"
            type="image/x-icon"
          />

          <meta name="theme-color" content="#000000" />

          <meta name="description" content="Valorant Landing Page" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="NextJS" />

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
