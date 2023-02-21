"use client"
import React from 'react'
import {Box, Image, List, HStack, ListItem, Button, Flex, Icon} from '@chakra-ui/react'


export default function Navbar() {
  return (
    <Box pt={5}>
      {/* left area */}
      <Flex justifyContent={"space-around"}>
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="panaverse logo" />
            <List>
              <HStack align={"center"} spacing={10} ml="40px" fontWeight="bold">
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* right area */}
        <Box>
          <Icon></Icon>
          <Button variant={'solid'}>Go to PIAIC</Button>
        </Box>
      </Flex>
    </Box>
  );
}
