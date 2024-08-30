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
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const searchParams = useSearchParams();

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
      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LW4JKF51D5"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LW4JKF51D5');
        `}
      </Script>
      <Suspense fallback={<>Loading...</>}>
        <Component {...pageProps} />
        <SpeedInsights />
      </Suspense>
    </>
  );
}
