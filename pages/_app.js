import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { UserProvider} from '@/context/UserContext';
import theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
      
       <ChakraProvider theme={theme}>
         <SessionProvider>
          <UserProvider>
             <Component {...pageProps} />
           </UserProvider>
         </SessionProvider>
       </ChakraProvider>

    
  );
}

