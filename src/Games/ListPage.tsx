import * as React from "react";
import {
  Box,
  Stack,
  StackDivider,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
} from "@chakra-ui/core";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { ALL_GAMES_QUERY } from "./Queries/gamesQuery";
import { useQuery } from "@apollo/client";

import PageHeader from "../Layout/PageHeader";
import { AllGames } from "../../globalTypes";
import GameCard from "./GameCard";

const GameListPage = () => {
  const gamesResult = useQuery<AllGames>(ALL_GAMES_QUERY);
  const games = gamesResult?.data?.game;

  if (gamesResult.loading || !games) {
    return (
      <Box>
        <PageHeader title="Games" />
      </Box>
    );
  }

  return (
    <Box>
      <PageHeader title="Games" />
      <Stack divider={<StackDivider borderColor="gray.700" />}>
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </Stack>
    </Box>
  );
};

export default GameListPage;
