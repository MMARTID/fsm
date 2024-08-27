import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import '@/styles/navbar.css';
import '@/styles/profileInfo.modal.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
