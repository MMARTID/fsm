import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { UserProvider} from '@/context/UserContext';
import "@/styles/globals.css";
import '@/styles/navbar.css';  // Mover la importación aquí
import '@/styles/profileInfo.modal.css';  // Mover la importación aquí

export default function App({ Component, pageProps }) {
  return (
       <ChakraProvider>
         <SessionProvider>
          <UserProvider>
        <Component {...pageProps} />
        </UserProvider>
        </SessionProvider>
       </ChakraProvider>

    
  );
}

