import React from 'react';
import FollowersSection from './followersSection';
import { Avatar, Text, HStack, VStack, Box } from '@chakra-ui/react';

export function AvatarSection({ name, image, bio }) {
  return (
    <HStack spacing={6} align="flex-start" mb={6}>
      <Avatar
        size="2xl"
        name={name || 'User'}
        src={image || 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1'}
        borderWidth="2px"
        borderColor="teal.500"
        boxShadow="md"
      />
      <VStack spacing={2} align="start">

        <Text fontSize="2xl" fontWeight="bold" color="teal.600">{name || 'User'}</Text>
        <Text color="gray.600" fontSize="lg">{bio || 'Bio not available'}</Text>
        
        <HStack spacing={4}>

          <FollowersSection></FollowersSection>

          </HStack>

      </VStack>

    </HStack>
  );
}

export default AvatarSection;