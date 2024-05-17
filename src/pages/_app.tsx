import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { StoreProvider } from "@/context/Store";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default CustomApp;
