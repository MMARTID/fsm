import React from 'react';
import FollowersSection from './followersSection';
import { Avatar, Text, HStack, VStack, Box } from '@chakra-ui/react';
import { useUser } from 'next-firebase-auth'; // Asegúrate de que esta importación sea correcta

export function AvatarSection({ name, image, bio }) {
  const user = useUser(); // Usa el hook para obtener el usuario actual

  return (
    <HStack spacing={6} align="flex-start" mb={6} w={"full"}>
      <Avatar
        size="2xl"
        name={user.displayName} // Accede a displayName de user
        src={user.photoURL} // Usa la foto del usuario si está disponible
        borderWidth="2px"
        borderColor="teal.500"
        boxShadow="md"
      />
      <VStack spacing={2} align="start" ml={4}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          {user.displayName}
        </Text>
        <Text color="gray.600" fontSize="lg">
          {bio || 'Bio not available'}
        </Text>
        <HStack spacing={4}>
          <FollowersSection />
        </HStack>
      </VStack>
    </HStack>
  );
}

export default AvatarSection;
