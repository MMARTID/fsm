// hooks/useAddPost.js

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase.config';
import { useToast } from '@chakra-ui/react';
import { useUser } from 'next-firebase-auth';
export function useAddPost() {
  const toast = useToast();
  const user = useUser();

  const addPost = async (content, gifUrl) => {
    try {
      const postsRef = collection(db, 'posts');
      const fullContent = gifUrl ? `${content} <br><img src="${gifUrl}" alt="GIF" />` : content;  // Inserta el GIF en el contenido

      await addDoc(postsRef, {
        content: fullContent,
        createdAt: new Date().toISOString(),
        authorName: user?.displayName || 'Anonymous',
        authorPhotoURL: user?.photoURL || 'https://example.com/default.jpg'
      });

      toast({
        title: "Post Added",
        description: "Your post has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error Adding Post",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error Adding Post", error);
    }
  };

  return { addPost };
}
