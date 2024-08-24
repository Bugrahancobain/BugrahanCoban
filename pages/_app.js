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
        <link rel="icon" href="#" />
      </header>
      <Suspense fallback={<>Loading...</>}>
        <Component {...pageProps} />
        <SpeedInsights />
      </Suspense>
    </>
  );
}
