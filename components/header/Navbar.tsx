"use client";
import {Box, Image, List, HStack, ListItem, Button, Flex, Link} from '@chakra-ui/react'
import { SearchIcon, MoonIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Box pt={5} as="header">
      {/* left area */}
      <Flex justifyContent={"space-around"} alignItems={"center"}>
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
            <Box pl={15} as="span">
              <SearchIcon w="25" h="25" />
            </Box>
            <Box px={15} as="span">
              <MoonIcon w="25" h="25" />
            </Box>
            <Link target={'_blank'} href={"https://www.piaic.org/"}>
            < Button variant={"link"}>Go to PIAIC</Button>
            </Link>
          {/* </Flex> */}
        </Box>
      </Flex>
    </Box>
  );
}
