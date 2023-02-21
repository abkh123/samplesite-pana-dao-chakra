"use client";
import { Box, HStack, Heading, Text, Image, Button, Avatar, AvatarGroup, Link } from "@chakra-ui/react";

export default function TopContainer() {
  return (
    <Box
      backgroundImage={"/images/background.webp"}
      backgroundSize={"contain"}
      py={20}
      mt={5}
    >
      <HStack>
        {/* left  */}
        <Box w="50%" color="white" pl="44">
          <Heading fontSize={58}>Build your next idea even faster</Heading>
          <Text lineHeight={"8"} align={"justify"}>
            One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </Text>
          <Box mt={5}>
            <Button colorScheme={"blue"} mr={"5"}>
              Buy Now
            </Button>
            <Button colorScheme={"blue"} variant={"outline"}>
              View Components
            </Button>
          </Box>
          <HStack mt="5">
            <AvatarGroup size="md" max={4}>
              <Avatar name="Zia Khan" src="/images/Zia-Khan.jpg" />
              <Avatar name="Adil Altaf" src="/images/Adil-Altaf.jfif" />
              <Avatar name="Owais Ali" src="/images/Owais-Ali.jpg" />
              <Avatar name="Abdullah Khateeb" src="/images/akk.jpg" />
            </AvatarGroup>
            <Text>Created by:</Text>
            <Link  target={"_blank"} href={"https://github.com/abkh123"} textColor={"blue.400"}>Abdullah Khateeb</Link>
            <Text>Tutorial by:</Text>
            <Link target={"_blank"} href={"https://www.youtube.com/@owaisali124"} color={"blue.400"}>Owais-Ali</Link>
          </HStack>
        </Box>
        {/* right */}
        <Box w="50%">
          <Image src="/images/banner.png" />
          <Text>right text</Text>
        </Box>
      </HStack>
    </Box>
  );
}
