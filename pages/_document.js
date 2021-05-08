import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="apple-mobile-web-app-title"
            content="Gulf Motorcycles-Repairs &amp; Rentals"
          />
          <meta
            name="application-name"
            content="Gulf Motorcycles-Repairs &amp; Rentals"
          />
          <meta name="msapplication-TileColor" content="#434343" />
          <meta name="theme-color" content="#434343"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
