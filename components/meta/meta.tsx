import Head from "next/head";
import { metadata } from "../../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#131313"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ff4" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#131313" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${metadata.description} by Pol Gubau Amores `}
      />
      <meta property="og:image" content={metadata.homeOgImage} />
      <meta
        property="og:description"
        content={`${metadata.description} by Pol Gubau Amores `}
      />
      <meta placeholder="tags" content={metadata.tags.join(", ")} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metadata.author.twitter} />
      <meta name="twitter:creator" content={metadata.author.twitter} />
      <meta name="twitter:title" content={metadata.title} />
      <meta
        name="twitter:description"
        content={`${metadata.description} by Pol Gubau Amores `}
      />

      <meta name="twitter:image" content={metadata.homeOgImage} />
      <meta name="twitter:image:alt" content={metadata.title} />
    </Head>
  );
};

export default Meta;
