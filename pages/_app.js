import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from '@/context/UserContext';
import initAuth from "@/initAuth";
import theme from "@/styles/theme";

initAuth();

function App({ Component, pageProps }) {
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

export default App;
