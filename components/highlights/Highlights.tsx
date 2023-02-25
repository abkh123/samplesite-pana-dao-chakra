import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { IoSpeedometer } from "react-icons/io5";
import { FaCommentDollar } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { MdSupportAgent  } from "react-icons/md";

export default function Highlights() {
  return (
    <Box>
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why Us?</Heading>
        <Text fontSize={20} py={3}>
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>

      <Container maxW={1200}>
        <HStack>
          {/* card 1 */}
          <Card align={"center"}>
            <CardHeader>
              <Center color="blue.500">
                <IoSpeedometer size={75} />
              </Center>
              <Heading size="md" mt="5">
                Speed up workflow
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"}>View here</Button>
            </CardFooter>
          </Card>

          {/* card 2 */}
          <Card align={"center"}>
            <CardHeader>
              <Center color="blue.500">
                <FaCommentDollar size={75} />
              </Center>
              <Heading size="md" mt="5">
                Save good money
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"}>View here</Button>
            </CardFooter>
          </Card>

          {/* card 3 */}
          <Card align={"center"}>
            <CardHeader>
              <Center color="blue.500">
                <HiCog size={75} />
              </Center>
              <Heading size="md" mt="5">
                Easily customizable
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"}>View here</Button>
            </CardFooter>
          </Card>

          {/* card 4 */}
          <Card align={"center"}>
            <CardHeader>
              {/* <Center color="blue.500"> */}
              <Box color={"blue.500"}>
                <MdSupportAgent size={75}/>
              </Box>
              {/* </Center> */}
              <Heading size="md" mt="5">
                Support Us
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"}>View here</Button>
            </CardFooter>
          </Card>
        </HStack>
      </Container>
    </Box>
  );
}
