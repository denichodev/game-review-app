import * as React from "react";
import { ChakraProvider, CSSReset, Box, Heading, Flex } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import { Header } from "./Layout/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box bg="gray.50">
      <Flex
        flexDirection="column"
        fontSize="xl"
        maxW={480}
        mx="auto"
        bg="gray.800"
        minH="100vh"
      >
        <Header />
        <Box flex={1} p={4}>
          <Heading color="green.300" as="h2" size="xl">
            Games
          </Heading>
        </Box>
        <Box>Footer</Box>
      </Flex>
    </Box>
  </ChakraProvider>
);
