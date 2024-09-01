import React from 'react';
import { Box, VStack, Text, IconButton, useDisclosure, Collapse, useBreakpointValue, useColorModeValue, Divider } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Responsive width based on screen size
  const sidebarWidth = useBreakpointValue({ base: '60px', md: isOpen ? '200px' : '80px' });

  // Use color mode values for background and text
  const bgColor = useColorModeValue('sidebar.light', 'sidebar.dark');
  const textColor = useColorModeValue('text.light', 'text.dark');

  return (
    <Box
      as="nav"
      bg={bgColor}
      color={textColor}
      p={4}
      width={sidebarWidth}
      top={0}
      left={0}
      zIndex={10} // Ensures it stays on top
      transition="width 0.3s ease" // Smooth transition for width
    >
      <IconButton
        aria-label="Toggle Navigation"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        mb={4} // Margin bottom to separate the button from the content
      />
      <Collapse in={isOpen}>
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.300', cursor: 'pointer' }}>Home</Text>
          <Divider />
          <Text fontSize="lg" _hover={{ color: 'gray.300', cursor: 'pointer' }}>Discover</Text>
          <Divider />
          <Text fontSize="lg" _hover={{ color: 'gray.300', cursor: 'pointer' }}>Messages</Text>
          <Divider /> 
          <Text fontSize="lg" _hover={{ color: 'gray.300', cursor: 'pointer' }}>Notifications</Text>
          <Divider />
          <Text fontSize="lg" _hover={{ color: 'gray.300', cursor: 'pointer' }}>Profile</Text>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Sidebar;
