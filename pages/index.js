'use client'

import { AuthAction, useUser, withUser } from 'next-firebase-auth'
import { getAuth, signOut } from 'firebase/auth'
import initAuth from '@/initAuth'
import { Box, Container, Text, VStack, useToast, HStack, Flex, Heading, Button, useColorModeValue } from '@chakra-ui/react'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/SideBar'
import { useEffect } from 'react'

// Initialize Firebase authentication
initAuth()


function Home() {

  const user = useUser()
  const toast = useToast()


  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const boxBgColor = useColorModeValue('white', 'gray.800')

  function handleSignOut() {
    const auth = getAuth()
    signOut(auth).then(() => {
      toast({
        title: "Signed out.",
        description: "You have been signed out successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    }).catch((error) => {
      toast({
        title: "Sign Out Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      console.error("Sign Out Error", error)
    })
  }


  
  if (user.clientInitialized === false) {
    return (
      <Container centerContent>
        <Text>Loading...</Text>
      </Container>
    )
  }

  return (
    <Box minHeight="100vh" bg={bgColor}>
      <Navbar />
      <Flex>
        <Box width={{ base: "100", md: "200px" }} 
             height={{ base: "auto", md: "calc(100vh - 60px)" }} 
             overflowY="auto" borderRight="0px" 
             
             borderBottom={{ base: "1px", md: "none" }}>
          <Sidebar />
        </Box>
        <Box flex={1} p={8}>
          <VStack spacing={8} align="stretch">
            <Box bg={boxBgColor} p={6} borderRadius="md" boxShadow="md">
              <Heading as="h1" size="xl" mb={4} textAlign="center" color={textColor}>
                Explore, Play, and Connect with Gamers!
              </Heading>
              <Text fontSize="lg" textAlign="center" color={textColor}>
                Here you'll find content similar to Twitter and Instagram.
              </Text>
            </Box>
            <Box bg={boxBgColor} p={6} borderRadius="md" boxShadow="md" maxHeight="400px" overflowY="auto">
              <VStack spacing={4} align="stretch">
                {[...Array(10)].map((_, i) => (
                  <Box key={i} p={4} borderWidth={1} borderRadius="md">
                    <Text fontSize="md" color={textColor}>
                      This is additional text to demonstrate scrolling behavior.
                      You can keep adding more text or content here to see how the container
                      becomes scrollable.
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Home)