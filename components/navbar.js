// components/Navbar.js
import React from "react";
import { Box, Flex, Image, Input, Link, useMediaQuery } from "@chakra-ui/react";

function Navbar() {
  // Media query hook to handle responsive styles
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex 
      as="nav" 
      direction="row"
      justify="space-between"
      p="10px 20px"
      bg="white"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      alignItems="center"
    >
      {/* Logo */}
      <Box className="navbar-logo" ml={isSmallerThan768 ? "0px" : "20px"}>
        <Image 
          src="/assets/redes.png" 
          alt="Logo" 
          boxSize={isSmallerThan768 ? "50px" : "60px"}
          objectFit="contain" 
          pr={isSmallerThan768 ? "0px" : "15px"}
        />
      </Box>

      {/* Search Bar */}
      <Box 
        className="navbar-search" 
        flex="2" 
        mx={isSmallerThan768 ? "10px" : "40px"}
      >
        <Input 
          placeholder="Search" 
          border="1px solid #dbdbdb"
          borderRadius="5px"
          bg="#fafafa"
          p={isSmallerThan768 ? "10px" : "5px"}
          height={isSmallerThan768 ? "50px" : "auto"}
        />
      </Box>

      {/* Icons */}
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
