import React from 'react';
import { Box, Text, Avatar, Stack, Grid, Divider, Tag, TagLabel, VStack, HStack } from '@chakra-ui/react';

function ProfileInfo() {
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
          name="John Doe"
          src="https://bit.ly/dan-abramov"
          borderWidth="2px"
          borderColor="teal.500"
        />
        <VStack spacing={2} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text color="gray.600" fontSize="lg">
            Software Engineer at Example Company. Passionate about building great user experiences.
          </Text>
          <HStack spacing={4}>
            <Box textAlign="center">
              <Text fontSize="lg" fontWeight="bold">
                120
              </Text>
              <Text color="gray.500">Followers</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="lg" fontWeight="bold">
                85
              </Text>
              <Text color="gray.500">Following</Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
      <Divider my={6} />
      {/* Juegos del Usuario */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Games I Play
        </Text>
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
          <Tag size="lg" variant="subtle" colorScheme="teal">
            <TagLabel>Game 1</TagLabel>
          </Tag>
          <Tag size="lg" variant="subtle" colorScheme="teal">
            <TagLabel>Game 2</TagLabel>
          </Tag>
          <Tag size="lg" variant="subtle" colorScheme="teal">
            <TagLabel>Game 3</TagLabel>
          </Tag>
          <Tag size="lg" variant="subtle" colorScheme="teal">
            <TagLabel>Game 4</TagLabel>
          </Tag>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
