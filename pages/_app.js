import * as gtag from "../gtag";
import "@/styles/globals.css";
import "@/styles/Banner.css";
import "@/styles/Contact.css";
import "@/styles/Experience.css";
import "@/styles/Education.css";
import "@/styles/Footer.css";
import "@/styles/NavBar.css";
import "@/styles/Projects.css";
import "@/styles/Skills.css";
import "@/styles/Me.css";
import "@/styles/AboutMe.css";
import "@/styles/MyProject.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <header>
        <title>Bugrahan Coban</title>
        <meta name="description" content="My Cv Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Bugrahan Çoban, HTML, CSS, JavaScript, React.js, Next.js, SASS, TypeScript"
        />
      </header>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Suspense fallback={<>Loading...</>}>
        <Component {...pageProps} />
        <SpeedInsights />
      </Suspense>
    </>
  );
}
