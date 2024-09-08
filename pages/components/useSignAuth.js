import { getAuth, signOut } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';

export function useAuth() {
  const toast = useToast();

  const handleSignOut = () => {
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
  };

  return { handleSignOut };
}
