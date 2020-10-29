import * as React from "react";
import { ChakraProvider, CSSReset, Box, Flex, Text } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Layout/Header";
import NavFooter from "./Layout/NavFooter";
import GameListPage from "./Games/ListPage";
import GameDetailPage from "./Games/DetailPage";
import theme from "./theme";

export const App = () => {
  return (
    <Router>
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
            <Box flex={1}>
              <Switch>
                <Route exact path="/">
                  <Box p={4}>
                    <GameListPage />
                  </Box>
                </Route>
                <Route path="/game/:id">
                  <GameDetailPage />
                </Route>
                <Route path="/reviews">
                  <Box p={4}>
                    <Text>REviews</Text>
                  </Box>
                </Route>
              </Switch>
            </Box>
            <NavFooter />
          </Flex>
        </Box>
      </ChakraProvider>
    </Router>
  );
};
