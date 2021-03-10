import "../public/scss/style.scss";

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";

import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";

export default withRedux(initStore)(
  class MyApp extends App {
    render() {
      const { Component, pageProps, store } = this.props;

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
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>

            <GoTop scrollStepInPx="50" delayInMs="16.66" />

            <Placeholder>
              <Loader />
            </Placeholder>
          </Preloader>
        </React.Fragment>
      );
    }
  }
);
