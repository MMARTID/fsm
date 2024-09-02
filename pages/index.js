// pages/index.js
import { AuthAction, useUser, withUser, withUserSSR } from 'next-firebase-auth';
import { getAuth, signOut } from 'firebase/auth';
import initAuth from '@/initAuth';
import Navbar from '@/components/profile/navbar';
import { Button, Container, Heading, Text, VStack, useToast, Box } from '@chakra-ui/react';

// Inicializa la autenticación de Firebase
initAuth();

function Home() {
  const user = useUser(); // Cambiado de useAuthUser a useUser
  const toast = useToast(); // Para mostrar mensajes emergentes

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      toast({
        title: "Signed out.",
        description: "You have been signed out successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }).catch((error) => {
      toast({
        title: "Sign Out Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Sign Out Error", error);
    });
  }

  if (user.clientInitialized === false) {
    // Cuando la autenticación todavía se está inicializando
    return (
      <Container centerContent>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Box>  
        <Navbar />

    <Container centerContent>
      <VStack spacing={4} align="center">
        <Heading as="h1">Welcome to Your App</Heading>
        {user.id ? (
          <>
            <Text>Welcome, {user.email}</Text>
            <Button colorScheme="teal" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </VStack>
    </Container>
    </Box>
  );
}

// Usar withUserSSR para el getServerSideProps
export const getServerSideProps = withUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(async function getServerSideProps() {
  return {
    props: {},
  };
});

// Usar withUser para proteger la página
export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Home);
