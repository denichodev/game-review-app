import * as React from "react";
import {
  Box,
  Text,
  Image,
  Stack,
  Heading,
  HStack,
  StackDivider,
  Tag,
  TagLabel,
} from "@chakra-ui/core";
import { GAME_BY_ID_QUERY, GAME_REVIEW } from "./Queries/gamesQuery";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import PageHeader from "../Layout/PageHeader";
import ReviewCard from "../Reviews/ReviewCard";
import {
  GameById,
  GameByIdVariables,
  GameReview,
  GameReviewVariables,
} from "../../globalTypes";

const GameDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [readMoreActive, setReadMoreActive] = React.useState<boolean>(false);
  const handleReadMoreClick = React.useCallback(() => {
    setReadMoreActive((prev) => !prev);
  }, []);

  const gameResult = useQuery<GameById, GameByIdVariables>(GAME_BY_ID_QUERY, {
    variables: {
      id: Number(params.id),
    },
  });
  const reviewsResult = useQuery<GameReview, GameReviewVariables>(GAME_REVIEW, {
    variables: {
      where: {
        game_id: {
          _eq: Number(params.id),
        },
      },
    },
  });
  const game = gameResult?.data?.game_by_pk;
  const reviews = reviewsResult?.data?.review || [];

  if (gameResult.loading || !game) {
    return (
      <Box>
        <PageHeader title="Games" />
      </Box>
    );
  }

  return (
    <Stack>
      <Image
        width="100%"
        height="200px"
        fit="cover"
        src={game.coverUrl || ""}
        alt={`Cover Image for ${game.name}`}
      />
      <Stack px={4} py={2} divider={<StackDivider borderColor="gray.700" />}>
        <Stack>
          <Heading as="h2">{game.name}</Heading>
          <Text fontSize="xs" color="gray.400">
            {`${game.developer}, ${game.releaseYear}`}
          </Text>
          <HStack>
            {game.genres.map((genre) => (
              <Tag size="sm" variant="outline" key={genre.genre.id}>
                <TagLabel>{genre.genre.name}</TagLabel>
              </Tag>
            ))}
          </HStack>
          <Text
            color="green.50"
            fontSize="md"
            noOfLines={readMoreActive ? undefined : 4}
            cursor="pointer"
            onClick={handleReadMoreClick}
          >
            {game.description}
          </Text>
          <Box cursor="pointer" onClick={handleReadMoreClick}>
            <Text fontSize="sm" color="gray.400" align="right">
              Read {readMoreActive ? "Less" : "More"}
            </Text>
          </Box>
        </Stack>
        <Stack>
          <Heading as="h3" size="md">
            Reviews
          </Heading>
          <Stack divider={<StackDivider borderColor="gray.700" />}>
            {reviews.map((review) => (
              <ReviewCard review={review} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GameDetailPage;
