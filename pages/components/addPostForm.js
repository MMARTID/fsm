// pages/components/AddPostForm.js

import { Box, Button, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Textarea, Input, Grid, Image, useToast, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { useGiphy } from '@/pages/components/useGiphy';

export default function AddPostForm({ onAddPost }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPost, setNewPost] = useState('');
  const [selectedGif, setSelectedGif] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { gifs, searchGifs, loading } = useGiphy();
  const toast = useToast();

  const handleAddPost = () => {
    if (newPost.trim() === '') {
      toast({
        title: "Post Content Required",
        description: "Please enter some content before adding a post.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Llama a la función para agregar la publicación, incluyendo el texto y el GIF
    onAddPost(newPost, selectedGif);
    setNewPost('');
    setSelectedGif('');
    setSearchQuery('');
    onClose();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchGifs(searchQuery);
  };

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} p={6} borderRadius="md" boxShadow="md" align={'center'}>
      <Button onClick={onOpen} colorScheme="teal" >Add New Post</Button>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Write your post content here..."
              size="md"
              mb={4}
            />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for GIFs..."
              mb={4}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
            />
            <Button onClick={handleSearch} colorScheme="teal" mb={4} isLoading={loading}>
              Search GIFs
            </Button>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
              {gifs.map(gif => (
                <Image
                  key={gif.id}
                  src={gif.images.fixed_height_small.url}
                  alt={gif.title}
                  cursor="pointer"
                  boxSize="100px"
                  objectFit="cover"
                  onClick={() => setSelectedGif(gif.images.original.url)}
                />
              ))}
            </Grid>
            {selectedGif && (
              <Box mt={4}>
                <Image src={selectedGif} alt="Selected GIF" boxSize="200px" />
              </Box>
            )}
            <Button onClick={handleAddPost} colorScheme="teal" width="full" mt={4}>
              Add Post
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
