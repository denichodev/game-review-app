import * as React from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Text,
  Link,
  VStack,
  IconButton,
  Code,
  Spacer,
  Center,
  Grid,
  Flex,
} from "@chakra-ui/core";
import { HamburgerIcon } from "@chakra-ui/icons";

const Logo = () => (
  <Text fontWeight="bold" fontSize="xl" color="green.300" align="left">
    G A M R
  </Text>
);

export const Header = () => (
  <Flex py={2} px={4} borderBottom="1px solid" borderBottomColor="green.300">
    <Logo />
    <Spacer />
    <Center>
      <HamburgerIcon color="green.300" />
    </Center>
  </Flex>
);
