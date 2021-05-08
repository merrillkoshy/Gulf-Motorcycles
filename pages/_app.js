import "../public/scss/style.scss";

import { Preloader, Placeholder } from "react-preloading-screen";

import Head from "next/head";

import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Gulf Motorcycles - Repairs &amp; Rentals</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Gulf Motorcycles - Repairs &amp; Rentals"
        />

        <meta
          name="og:title"
          property="og:title"
          content="Gulf Motorcycles - Repairs &amp; Rentals"
        ></meta>
        <meta
          name="twitter:card"
          content="Gulf Motorcycles - Repairs &amp; Rentals"
        ></meta>
        <link rel="canonical" href="https://gulfmotorcycles.com/"></link>

        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <base target="_blank" />

        <meta
          name="description"
          property="description"
          itemProp="description"
          content={"description"}
        />

        {/* Open Graph */}
        <meta
          name="og:title"
          property="og:title"
          content={"Gulf Motorcycles - Repairs &amp; Rentals"}
        />
        <meta
          name="og:description"
          property="og:description"
          content={"description"}
        />

        {/* Import CSS for nprogress */}
        {/* <link rel="stylesheet" type="text/css" href="/assets/css/nprogress.css" /> */}
        <meta
          name="og:image"
          property="og:image"
          content={
            "https://gulf-motorcycles.vercel.app/gulf-motorcycles-og-image.png"
          }
          itemProp="image"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          property="og:url"
          content={"https://gulfmotorcycles.com"}
        />
        <meta
          property="og:image:secure_url"
          name="og:image:secure_url"
          content={"https://gulfmotorcycles.com"}
        />
        <meta
          property="og:image:type"
          name="og:image:type"
          content="image/png"
        />
        <meta property="og:image:width" name="og:image:width" content="1200" />
        <meta property="og:image:height" name="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          name="og:image:alt"
          content={"description"}
        />
        <meta
          property="og:site_name"
          name="og:site_name"
          content="Gulf Motorcycles"
        />
        <meta property="og:locale" name="og:locale" content="en_US" />
        <meta property="og:type" name="og:type" content="website" />
        <meta itemProp="name" content={"description"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@GulfRepairs" />
        <meta name="twitter:creator" content="@GulfRepairs" />
        <meta
          name="twitter:title"
          content={"Gulf Motorcycles- Repairs & Rentals"}
        />
        <meta name="twitter:description" content={"description"} />
        <meta name="twitter:app:country" content="ae" />
        <meta
          name="twitter:image"
          content={
            "https://gulf-motorcycles.vercel.app/gulf-motorcycles-og-image.png"
          }
        />
      </Head>

      <Preloader>
        <Component {...pageProps} />

        <GoTop scrollStepInPx="50" delayInMs="16.66" />

        <Placeholder>
          <Loader />
        </Placeholder>
      </Preloader>
    </React.Fragment>
  );
}
