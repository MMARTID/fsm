import Head from "next/head";
import React from "react";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  // Responsive font size
  const fontSize = useBreakpointValue({ base: "lg", md: "xl" });
  
  // Colors based on color mode
  const buttonColorScheme = useColorModeValue("teal", "orange");
  const backgroundColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Movie app built with Next.js and Chakra UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container maxW="container.xl" py={12} bg={backgroundColor} minH="100vh">
        <VStack spacing={6} align="center">
          <Heading fontSize={fontSize} color={textColor}>
            {session ? `Welcome, ${session.user.name}` : "Welcome to Movie App"}
          </Heading>

          {session ? (
            <VStack spacing={4}>
              <Text fontSize={fontSize} color={textColor}>
                Enjoy exploring our movie collection!
              </Text>
              <Button colorScheme={buttonColorScheme} onClick={() => signOut()}>
                Sign out
              </Button>
            </VStack>
          ) : (
            <VStack spacing={4}>
              <Text fontSize={fontSize} color={textColor}>
                Please sign in to access the full features.
              </Text>
              <Button colorScheme={buttonColorScheme} onClick={() => signIn('google')}>
                Sign in with Google
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>
    </>
  );
}
