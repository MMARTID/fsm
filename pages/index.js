import { AuthAction, useUser, withUser, withUserSSR } from 'next-firebase-auth';
import { getAuth, signOut } from 'firebase/auth';
import initAuth from '@/initAuth';
import { Button, Box, Container, Heading, Text, VStack, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import Navbar from '@/components/profile/navbar';

// Inicializa la autenticación de Firebase
initAuth();

function Home() {
  const user = useUser();
  const toast = useToast();

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
            <Text>Welcome, {user.displayName}</Text>
            <Button colorScheme="teal" onClick={handleSignOut}>
              Sign Out
            </Button>
            <Link href="/profile" passHref legacyBehavior>
              <a style={{ color: '#2b6cb0', textDecoration: 'underline' }}>Go to Profile</a>
            </Link>
          </>
        ) : (
          <Link href="/auth" passHref legacyBehavior>
            <a style={{ color: '#2b6cb0', textDecoration: 'underline' }}>Login</a>
          </Link>
        )}
      </VStack>
    </Container>
    </Box>
  );
}

export const getServerSideProps = withUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(async function getServerSideProps() {
  return {
    props: {},
  };
});

export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Home);
