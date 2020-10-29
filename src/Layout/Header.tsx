import * as React from "react";
import { Text, Spacer, Center, Flex } from "@chakra-ui/core";
import { HamburgerIcon } from "@chakra-ui/icons";

const Logo = () => (
  <Text fontWeight="bold" fontSize="xl" color="green.50" align="left">
    G A M R
  </Text>
);

const Header = () => (
  <Flex
    py={2}
    px={4}
    bg="gray.700"
    position="sticky"
    top={0}
    right={0}
    left={0}
  >
    <Logo />
    <Spacer />
    <Center>
      <HamburgerIcon color="green.50" />
    </Center>
  </Flex>
);

export default Header;
