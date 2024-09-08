import React from 'react';
import { Box, Text, Grid, Tag, TagLabel } from '@chakra-ui/react';

export function GamesSection({ games }) {
  return (
    <Box textAlign={'center'}>
      <Text fontSize="xl" fontWeight="bold" mb={4} color="teal.600" >
        Games I Play
      </Text>
      <Grid  
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))" 
        gap={4}
        mb={4}
        
      >
        {games?.map((game, index) => (
          <Tag 
            key={index} 
            size="lg" 
            variant="subtle" 
            colorScheme="teal"
            borderRadius="md"
            px={4}
            py={2}
            boxShadow="sm"
          >
            <TagLabel>{game}</TagLabel>
          </Tag>
        )) || (
          <Tag 
            size="lg" 
            variant="subtle" 
            colorScheme="teal"
            borderRadius="md"
            px={4}
            py={2}
            boxShadow="sm"
          >
            <TagLabel>No games listed</TagLabel>
          </Tag>
        )}
      </Grid>
    </Box>
  );
}


export default GamesSection;