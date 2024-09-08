import React from "react";
import { Box, Flex, Image, Input, Link, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

function Navbar() {
  // Define los valores de estilo en función del tamaño de la pantalla
  const navbarHeight = useBreakpointValue({ base: "60px", md: "70px" });
  const logoSize = useBreakpointValue({ base: "50px", md: "60px" });
  const logoMargin = useBreakpointValue({ base: "0px", md: "10px" });
  const searchMargin = useBreakpointValue({ base: "10px", md: "20px" });
  const searchPadding = useBreakpointValue({ base: "10px", md: "10px" });
  const searchHeight = useBreakpointValue({ base: "auto", md: "auto" });
  const iconsDisplay = useBreakpointValue({ base: "none", md: "flex" });
  const marginRightIcons = useBreakpointValue({ base: "none", md: "10px" });

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
      height={navbarHeight}
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Box className="navbar-logo" ml={logoMargin}>
        <Image 
          onClick={() => window.location.href = "/"}  // Agrega un evento de clic para redirigir a la página de inicio 
          src="/assets/redes.png" 
          alt="Logo" 
          boxSize={logoSize}
          objectFit="contain" 
          pr={logoMargin}
        />
      </Box>

      <Box 
        className="navbar-search" 
        flex="2" 
        mx={searchMargin}
      >
        <Input 
          placeholder="Search" 
          border={`1px solid ${borderColor}`}
          borderRadius="5px"
          bg={inputBgColor}
          p={searchPadding}
          height={searchHeight}
        />
      </Box>

      <Flex 
        className="navbar-icons" 
        align="center" 
        gap="10px"
        mr={marginRightIcons}
        display={iconsDisplay}
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
