import React from "react";
import Head from "next/head";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/profile/navbar";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button, Container, HStack, VStack, Text, useBreakpointValue, Box } from "@chakra-ui/react";

export default function Home() {
  const { data: session } = useSession();

  // Responsive font size
  const fontSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <>
      <Head>
        <title>Gaming Social Network</title>
        <meta name="description" content="A social network for gamers built with Next.js and Chakra UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with Navbar */}
      <Navbar />
      
      <Box as="main" p={4} maxW="container.xl">
        <HStack spacing={0} align="start">
          <Sidebar />
          
          <Container maxW="container.xl" py={12} minH="100vh">
            <VStack spacing={6} align="center">
              {session ? (
                <VStack spacing={4}>
                  <Text fontSize={fontSize}>
                    Enjoy connecting with fellow gamers!
                  </Text>
                  <Button colorScheme="blue" onClick={() => signOut()}>
                    Sign out
                  </Button>
                </VStack>
              ) : (
                <VStack spacing={4}>
                  <Text fontSize={fontSize}>
                    Please sign in to access the full features.
                  </Text>
                  <Button colorScheme="blue" onClick={() => signIn('google')}>
                    Sign in with Google
                  </Button>
                </VStack>
              )}
            </VStack>
          </Container>
        </HStack>
      </Box>
    </>
  );
}
