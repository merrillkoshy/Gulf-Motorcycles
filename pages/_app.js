import "../public/scss/style.scss";

import { Preloader, Placeholder } from "react-preloading-screen";

import Head from "next/head";

import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Gulf Motorcycles - Motorcycle Repairs</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Gulf Motorcycles - Motorcycle Repairs"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Gulf Motorcycles - Motorcycle Repairs"
        ></meta>
        <meta
          name="twitter:card"
          content="Gulf Motorcycles - Motorcycle Repairs"
        ></meta>
        <link rel="canonical" href="https://gulfmotorcycles.com/"></link>
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
