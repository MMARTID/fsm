import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import '@/styles/navbar.css';  // Mover la importación aquí
import '@/styles/profileInfo.modal.css';  // Mover la importación aquí

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

