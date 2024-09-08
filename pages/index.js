'use client'

import { AuthAction, useUser, withUser } from 'next-firebase-auth';
import { Box, Container, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import Navbar from '@/pages/components/navbar';
import Sidebar from '@/pages/components/SideBar';
import AddPostForm from '@/pages/components/addPostForm';
import PostList from '@/pages/components/PostList';
import { usePosts } from '@/pages/components/usePost';
import { useAddPost } from '@/pages/components/useAddPost';
import { useAuth } from '@/pages/components/useSignAuth';

function Home() {
  const user = useUser();
  const { posts, loading } = usePosts();
  const { addPost } = useAddPost();
  const { handleSignOut } = useAuth();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  if (user.clientInitialized === false) {
    return (
      <Container centerContent>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Box minHeight="100vh" bg={bgColor}>
      <Navbar />
      <Flex>
        <Box width={{ base: "100", md: "200px" }} height={{ base: "auto", md: "calc(100vh - 60px)" }} overflowY="auto" borderRight="0px" borderBottom={{ base: "1px", md: "none" }}>
          <Sidebar />
        </Box>
        <Box flex={1} p={8}>
          <AddPostForm onAddPost={addPost} />
          <PostList posts={posts} loading={loading} />
        </Box>
      </Flex>
    </Box>
  );
}

export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Home);
