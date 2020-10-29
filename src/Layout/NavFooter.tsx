import * as React from "react";
import { Flex, Center, Text } from "@chakra-ui/core";
import { StarIcon, ChatIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

interface NavMenuProps {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  to: string;
}

const NavMenu = (props: NavMenuProps) => {
  return (
    <Center flex={1}>
      <Link to={props.to} style={{ width: "100%" }}>
        <Center flex={1} flexDir="column">
          {props.icon}
          <Text fontSize="xs" color={props.active ? "green.300" : "green.50"}>
            {props.title}
          </Text>
        </Center>
      </Link>
    </Center>
  );
};

const NavFooter = () => {
  const location = useLocation();
  const isReviewsActive = location.pathname === "/reviews";

  return (
    <Flex
      py={2}
      backgroundColor="gray.700"
      borderColor="gray.500"
      position="sticky"
      bottom={0}
      right={0}
      left={0}
    >
      <NavMenu
        to="/"
        title="Games"
        active={!isReviewsActive}
        icon={
          <StarIcon
            boxSize={3}
            color={!isReviewsActive ? "green.300" : "green.50"}
          />
        }
      />
      <NavMenu
        to="/reviews"
        title="Reviews"
        active={isReviewsActive}
        icon={
          <ChatIcon
            boxSize={3}
            color={isReviewsActive ? "green.300" : "green.50"}
          />
        }
      />
    </Flex>
  );
};

export default NavFooter;
