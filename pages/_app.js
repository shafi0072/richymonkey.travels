import "@/styles/globals.css";
import Layout from "@/src/Components/layout";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);
  return (
    <>
      <Head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5823309906308652"
        />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5823309906308652"
          crossorigin="anonymous"></script>



      </Head>
      <Layout>

        <Component {...pageProps} />

        <ins class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5823309906308652"
          data-ad-slot="7800094899"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </Layout>
    </>
  );
}
