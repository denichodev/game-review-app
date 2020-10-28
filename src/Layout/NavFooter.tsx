import * as React from "react";
import { Flex, Center, Text } from "@chakra-ui/core";
import { StarIcon, ChatIcon } from "@chakra-ui/icons";

interface NavMenuProps {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
}

const NavMenu = (props: NavMenuProps) => {
  return (
    <Center flex={1} flexDir="column">
      {props.icon}
      <Text fontSize="xs" color={props.active ? "green.300" : "green.50"}>
        Games
      </Text>
    </Center>
  );
};

const NavFooter = () => {
  return (
    <Flex
      py={2}
      backgroundColor="gray.700"
      borderColor="gray.500"
      boxShadow="0 3px 5px 6px #171923"
      position="sticky"
      bottom={0}
      right={0}
      left={0}
    >
      <NavMenu
        title="Games"
        active
        icon={<StarIcon boxSize={3} color="green.300" />}
      />
      <NavMenu
        title="Reviews"
        icon={<ChatIcon boxSize={3} color="green.50" />}
      />
    </Flex>
  );
};

export default NavFooter;
