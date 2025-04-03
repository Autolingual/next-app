import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "@/styles/globals.css";
import { CustomWidget } from "@/components/CustomWidget";

const inter = Inter({ subsets: ["latin"] });

const Layout = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "2px 2px 2px 2px #f1f1f1f1",
        height: 60,
        position: "fixed",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 8,
        }}
      >
        <CustomWidget />
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/corporation">Company</Link>
        </div>
      </div>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
