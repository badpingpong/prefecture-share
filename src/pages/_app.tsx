import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DependencyProvider } from "@presentation/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DependencyProvider>
      <Component {...pageProps} />
    </DependencyProvider>
  );
}
