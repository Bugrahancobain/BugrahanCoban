import Head from "next/head";
import { Inter } from "@next/font/google";
import HomePage from "./HomePage";
import { ReactIco } from "../public/react.ico";

const inter = Inter({ subsets: ["latin"] });

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      t: {
        ...require(`../lang/${locale}.json`),
      },
    },
  };
}

export default function Home({ locale, t }) {
  return (
    <>
      <Head>
        <title>Bugrahan Coban</title>
        <meta name="description" content="My Cv Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Bugrahan Çoban, HTML, CSS, JavaScript, React.js, Next.js, SASS, TypeScript"
        />
        <link rel="fav" type="icon" href={ReactIco}></link>
      </Head>
      <HomePage locale={locale} t={t} />
    </>
  );
}
