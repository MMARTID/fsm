import { Box, Text, VStack, HStack, Avatar, Spinner, useColorModeValue } from '@chakra-ui/react';

export default function PostList({ posts, loading }) {
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const bgColor = useColorModeValue('white', 'gray.800');

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="teal.500" />
      </Box>
    );
  }

  return (
    <VStack spacing={4} mt={4} align="stretch">
      {posts.map(post => (
        <Box key={post.id} p={4} borderWidth={1} borderRadius="md" bg={bgColor}>
          <HStack spacing={4} mb={4}>
            <Avatar src={post.authorPhotoURL} name={post.authorName} />
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              {post.authorName || 'Anonymous'}
            </Text>
          </HStack>
          <Text fontSize="md" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Box>
      ))}
    </VStack>
  );
}
