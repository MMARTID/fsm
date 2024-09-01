import React from 'react';
import { Box, Divider, HStack, useColorModeValue } from '@chakra-ui/react';
import { useUser } from '@/context/UserContext';
import GamesSection from '@/components/profile/gamesSection';
import AvatarSection from '@/components/profile/avatarSection';

function ProfileInfo() {
  const session = useUser();

  // Mueve useColorModeValue dentro del componente
  const containerPf = useColorModeValue('white', 'gray.800');

  return (
    <Box
      maxW="1200px"
      mx="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="lg"
      bg={containerPf}
    >
      {/* Cabecera del Perfil */}
      <HStack spacing={6} align="flex-start">
        <AvatarSection name={session?.user?.name} image={session?.user?.image} bio={session?.user?.bio} />
      </HStack>
      <Divider my={6} />
      
      {/* Juegos del Usuario */}
      <GamesSection />
    </Box>
  );
}

export default ProfileInfo;
