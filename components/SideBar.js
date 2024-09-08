import React from 'react';
import { Box, VStack, Text, IconButton, useDisclosure, useBreakpointValue, useColorModeValue, Divider, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { getAuth, signOut } from 'firebase/auth';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Use color mode values for background and text
  const bgColor = useColorModeValue('sidebar.light', 'sidebar.dark');
  const textColor = useColorModeValue('text.light', 'text.dark');

  // Responsive behavior for the sidebar
  const sidebarWidth = '200px';  // Puedes ajustar el ancho de la barra lateral según sea necesario
  const iconButtonTop = useBreakpointValue({ base: '85px', lg: '89px', md: '89px' });
  const menuMarginTop = useBreakpointValue({ base: '70px', md: '70px' });

  return (
    <>
      {/* Conditionally render the IconButton based on screen size */}
      <IconButton
        aria-label="Toggle Navigation"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        position="fixed"
        top={iconButtonTop}
        left={isOpen ? `calc(${sidebarWidth} + 16px)` : '16px'} // Ajusta el margen izquierdo cuando el menú está abierto
        zIndex={1000}
        transition="top 0.3s ease, left 0.3s ease"
        display={{ base: 'block', md: 'none' }} // Only show the button on mobile
      />

      {/* Sidebar */}
      {isOpen && (
        <Box
          top={menuMarginTop}
          left={0}
          as='nav'
          width={sidebarWidth}
          bg={bgColor}
          height="100vh"
          transition="all 0.3s ease"
          display={{ base: 'block', md: 'none' }} // Sidebar only on mobile when open
        >
          <VStack
            spacing={{ base: 4, md: 4 }} 
            align="start"
            color={textColor}
            paddingLeft={{ base: '2', md: '4' }} // Add padding for mobile
            paddingRight={{ base: '2', md: '4' }} // Add padding for mobile
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
              fontWeight="bold"
              _hover={{ color: 'gray.300', cursor: 'pointer' }}
              paddingY={{ base: '2', md: '3' }}
              marginTop={2} // Add vertical padding
            >
              Home
            </Text>
            <Divider />
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
              _hover={{ color: 'gray.300', cursor: 'pointer' }}
              paddingY={{ base: '2', md: '3' }} // Add vertical padding
            >
              Discover
            </Text>
            <Divider />
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
              _hover={{ color: 'gray.300', cursor: 'pointer' }}
              paddingY={{ base: '2', md: '3' }} // Add vertical padding
            >
              Messages
            </Text>
            <Divider />
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
              _hover={{ color: 'gray.300', cursor: 'pointer' }}
              paddingY={{ base: '2', md: '3' }} // Add vertical padding
            >
              Notifications
            </Text>
            <Divider />
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
              _hover={{ color: 'gray.300', cursor: 'pointer' }}
              paddingY={{ base: '2', md: '3' }} // Add vertical padding
            >
              Profile
            </Text>
            <Button onClick={() => signOut(getAuth())}>
              Sign Out
            </Button>
          </VStack>
        </Box>
      )}

      <Box
        position="fixed"
        top={menuMarginTop}
        left={0}
        width={sidebarWidth}
        bg={bgColor}
        height="100vh"
        transition="all 0.3s ease"
        display={{ base: 'none', md: 'block' }} // Sidebar always visible on desktop
      >
        <VStack
          spacing={{ base: 4, md: 4 }} 
          align="start"
          color={textColor}
          paddingLeft={{ base: '2', md: '4' }} // Add padding for mobile
          paddingRight={{ base: '2', md: '4' }} // Add padding for mobile
        >
          <Text
            fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
            fontWeight="bold"
            _hover={{ color: 'gray.300', cursor: 'pointer' }}
            paddingY={{ base: '2', md: '3' }} // Add vertical padding
          >
            Home
          </Text>
          <Divider />
          <Text
            fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
            _hover={{ color: 'gray.300', cursor: 'pointer' }}
            paddingY={{ base: '2', md: '3' }} // Add vertical padding
          >
            Discover
          </Text>
          <Divider />
          <Text
            fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
            _hover={{ color: 'gray.300', cursor: 'pointer' }}
            paddingY={{ base: '2', md: '3' }} // Add vertical padding
          >
            Messages
          </Text>
          <Divider />
          <Text
            fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
            _hover={{ color: 'gray.300', cursor: 'pointer' }}
            paddingY={{ base: '2', md: '3' }} // Add vertical padding
          >
            Notifications
          </Text>
          <Divider />
          <Text
            fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
            _hover={{ color: 'gray.300', cursor: 'pointer' }}
            paddingY={{ base: '2', md: '3' }} // Add vertical padding
          >
            Profile
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;
