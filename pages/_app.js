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
export default function App({ Component, pageProps }) {
  const searchParams = useSearchParams();

  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
      </Suspense>
    </>
  );
}
