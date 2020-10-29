import * as React from "react";
import {
  Text,
  Stack,
  Image,
  Heading,
  HStack,
  Tag,
  Link,
  TagLabel,
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { AllGames_game } from "../../globalTypes";

interface Props {
  game: AllGames_game;
}

const GameCard = ({ game }: Props) => (
  <Stack key={game.id}>
    <RouterLink to={`/game/${game.id}`}>
      <Image
        borderRadius={6}
        width="100%"
        cursor="pointer"
        height="120px"
        fit="cover"
        src={game.coverUrl || ""}
        alt={`Cover Image for ${game.name}`}
      />
    </RouterLink>
    <Heading as="h6" size="lg" color="green.50">
      <RouterLink to={`/game/${game.id}`}>
        <Link>{game.name}</Link>
      </RouterLink>
    </Heading>
    <HStack>
      {game.genres.map((genre) => (
        <Tag size="sm" variant="outline">
          <TagLabel>{genre.genre.name}</TagLabel>
        </Tag>
      ))}
    </HStack>
    <Text color="green.50" noOfLines={2} fontSize="md">
      {game.description}
    </Text>
    <HStack>
      <Text fontSize="xs" color="gray.400">
        {`${game.developer}, ${game.releaseYear}`}
      </Text>
    </HStack>
  </Stack>
);

export default GameCard;
