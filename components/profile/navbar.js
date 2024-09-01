import React from "react";
import { Box, Flex, Image, Input, Link, useColorModeValue, useMediaQuery } from "@chakra-ui/react";

function Navbar() {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  // Use color mode values for background, border, and text
  const navbarBgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('#dbdbdb', '#444');
  const inputBgColor = useColorModeValue('#fafafa', '#333');

  return (
    <Flex 
      as="nav" 
      direction="row"
      justify="space-between"
      p="10px 20px"
      bg={navbarBgColor}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      alignItems="center"
      height={isSmallerThan768 ? "60px" : "80px"}  // Establece una altura fija para el navbar
      position="sticky"  // Haz que el navbar se quede en la parte superior al hacer scroll
      top="0"
      zIndex="10"  // Asegura que el navbar esté siempre sobre otros elementos
    >
      <Box className="navbar-logo" ml={isSmallerThan768 ? "0px" : "20px"}>
        <Image 
          src="/assets/redes.png" 
          alt="Logo" 
          boxSize={isSmallerThan768 ? "50px" : "60px"}
          objectFit="contain" 
          pr={isSmallerThan768 ? "0px" : "15px"}
        />
      </Box>

      <Box 
        className="navbar-search" 
        flex="2" 
        mx={isSmallerThan768 ? "10px" : "40px"}
      >
        <Input 
          placeholder="Search" 
          border={`1px solid ${borderColor}`}
          borderRadius="5px"
          bg={inputBgColor}
          p={isSmallerThan768 ? "10px" : "5px"}
          height={isSmallerThan768 ? "50px" : "auto"}
        />
      </Box>

      <Flex 
        className="navbar-icons" 
        align="center" 
        gap="10px"
        display={isSmallerThan768 ? "none" : "flex"}
      >
        <Link href="/">
          <Image 
            src="/assets/hogar.png" 
            alt="Home" 
            boxSize="25px"
            cursor="pointer"
          />
        </Link>

        <Link href="/profile">
          <Image 
            src="/assets/usuario.png" 
            alt="Profile" 
            boxSize="25px"
            cursor="pointer"
          />
        </Link>

        <Image 
          src="/assets/agregar.png" 
          alt="Add" 
          boxSize="25px"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
