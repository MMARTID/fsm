import React from 'react';
import { Box, Text, HStack, useBreakpointValue } from '@chakra-ui/react';

export function FollowersSection({ followers, following }) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack spacing={4} justifyContent={isMobile ? 'center' : 'space-between'}>
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="bold" color="teal.600">{followers || 0}</Text>
        <Text color="gray.500">Followers</Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="bold" color="teal.600">{following || 0}</Text>
        <Text color="gray.500">Following</Text>
      </Box>
    </HStack>
  );
}


export default FollowersSection;