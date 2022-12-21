import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import NoteProvider from "../core/context/noteContext";

//import "../style.css";
// import "../App.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoteProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NoteProvider>
  );
}
