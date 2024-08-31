import React from 'react';
import { Box, Text, Avatar, Grid, Divider, Tag, TagLabel, VStack, HStack } from '@chakra-ui/react';
import { useUser } from '@/context/UserContext';
import FollowersSection from './followersSection';
import GamesSection from './gamesSection';

function ProfileInfo() {
  const session = useUser();

  return (
    <Box
      maxW="1200px"
      mx="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="lg"
      bg="white"
    >
      {/* Cabecera del Perfil */}
      <HStack spacing={6} align="flex-start">
        <Avatar
          size="2xl"
          src={session?.user.image || 'https://bit.ly/dan-abramov'}
          borderWidth="2px"
          borderColor="teal.500"
        />
        <VStack spacing={2} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            {session?.user.name || 'User'}
          </Text>
          <Text color="gray.600" fontSize="lg">
            {session?.user.bio || 'Bio not available'}
          </Text>

          <HStack spacing={4}>
            <FollowersSection></FollowersSection>
          </HStack>

        </VStack>
      </HStack>
      <Divider my={6} />
      
      {/* Juegos del Usuario */}
      <GamesSection></GamesSection>
      
    </Box>
  );
}

export default ProfileInfo;
