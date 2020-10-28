import * as React from "react";
import { ChakraProvider, CSSReset, Box, Flex } from "@chakra-ui/core";

import Header from "./Layout/Header";
import NavFooter from "./Layout/NavFooter";
import GameListPage from "./Games/ListPage";
import theme from "./theme";

export const App = () => {
  return (
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
            <GameListPage />
          </Box>
          <NavFooter />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
