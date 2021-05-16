import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";
import { GTM_ID } from "../utils/gtm";

class MyDocument extends Document {
  render() {
    const socialMediaStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gulf Motorcycles - Repairs & Rentals",
      url: "https://www.gulfmotorcycles.com/",
      logo: "https://www.gulfmotorcycles.com/logo.png",
      sameAs: [
        "https://www.facebook.com/gulfmotorcyclerepairs",
        "https://www.instagram.com/gulfrepairs/",
        "https://twitter.com/GulfRepairs",
      ],
    };
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "MotorcycleRepair",
      image: "https://www.gulfmotorcycles.com/logo.png",
      "@id": "https://www.gulfmotorcycles.com",
      name: "Gulf Motorcycles - Repairs & Rentals",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Al Qouz -3, Opposite Al Ahli Driving Centre, MK Ghanim Compound, Unit 45",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1230733,
        longitude: 55.2237186,
      },
      url: "https://goo.gl/maps/xJiZNwpVxPFJNLw3A",
      telephone: "+971567644951",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "20:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/gulfmotorcyclerepairs",
        "https://www.instagram.com/gulfrepairs/",
        "https://twitter.com/GulfRepairs",
      ],
    };

    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(socialMediaStructuredData),
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
