import "@/styles/globals.css";
import Layout from "@/src/Components/layout";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/src/Components/core/Loading";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setIsLoading(true);
      }
    };

    const handleComplete = async () => {
      // Ensure the loading screen is displayed for at least 3 seconds (3000 milliseconds)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 3000 milliseconds = 3 seconds
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    // router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      // router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5823309906308652" crossorigin="anonymous"></script>
      </Head>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <Layout>
            <Component {...pageProps} />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-5823309906308652"
              data-ad-slot="7800094899"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </Layout>
        )}
      </>
    </>
  );
}
