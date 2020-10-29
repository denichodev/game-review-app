import * as React from "react";
import { Text, Spacer, Center, Flex, Box } from "@chakra-ui/core";
import { HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, useHistory } from "react-router-dom";

const Logo = () => (
  <Text fontWeight="bold" fontSize="xl" color="green.50" align="left">
    G A M R
  </Text>
);

const mainPaths = ["/", "/reviews"];

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const shouldShowBackButton = !mainPaths.includes(location.pathname);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <Flex bg="gray.700" position="sticky" top={0} right={0} left={0}>
        {shouldShowBackButton && (
          <Center width="40px" cursor="pointer" onClick={handleBackButtonClick}>
            <ArrowBackIcon color="green.50" />
          </Center>
        )}
        <Flex px={4} py={2} flex={1}>
          <Logo />
          <Spacer />
          <Center>
            <HamburgerIcon color="green.50" />
          </Center>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
