import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbax from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Navbax />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
