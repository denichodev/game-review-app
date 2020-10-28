import * as React from "react";
import {
  Text,
  Stack,
  Image,
  Heading,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/core";
import { AllGames_game } from "../../globalTypes";

interface Props {
  game: AllGames_game;
  variant?: "simple" | "full";
}

const GameCard = ({ game }: Props) => (
  <Stack key={game.id}>
    <Image
      borderRadius={6}
      width="100%"
      height="120px"
      fit="cover"
      src={game.coverUrl || ""}
      alt={`Cover Image for ${game.name}`}
    />
    <Heading as="h6" size="lg" color="green.50">
      {game.name}
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

GameCard.defaultProps = {
  variant: "simple",
};

export default GameCard;
