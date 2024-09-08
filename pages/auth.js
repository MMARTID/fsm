import React from 'react';
import FirebaseAuth from '@/pages/components/FirebaseAuth';
import { AuthAction, withUser } from 'next-firebase-auth';
import { Box, Button, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

// Configuración de FirebaseAuth
const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: 'github.com', // Actualiza el proveedor según tu configuración
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function Auth() {
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, teal.400, blue.500)"
      p={4}
    >
      <VStack spacing={6} align="center" maxW="md" w="full" bg="white" p={6} borderRadius="md" boxShadow="lg">
        <Heading as="h1" size={headingSize} textAlign="center" color="teal.500">
          Welcome to MyApp
        </Heading>
        <Text fontSize="lg" textAlign="center" color={"gray.600"}>
          Please sign in to continue. <br /> If you are not registered, you cannot proceed further.
        </Text>
        <FirebaseAuth />
        <Button 
          mt={4} 
          colorScheme="teal" 
          variant="solid" 
          onClick={() => window.location.href = '/'} 
        >
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}

export default withUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth);
