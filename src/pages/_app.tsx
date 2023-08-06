import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbax from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>AlphaShifter</title>
      </Head>
      <Navbax />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
