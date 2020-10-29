import * as React from "react";
import {
  Box,
  Text,
  HStack,
  Spacer,
  Avatar,
  Image,
  Link,
} from "@chakra-ui/core";
import { format } from "date-fns";
import { Link as RouterLink } from "react-router-dom";

import { review } from "../../globalTypes";

interface Props {
  review: review;
  variant?: "simple" | "contextual";
}

const ReviewCard = (props: Props) => {
  const { review, variant } = props;
  const [readMoreActive, setReadMoreActive] = React.useState<boolean>(false);
  const handleReadMoreClick = React.useCallback(() => {
    setReadMoreActive((prev) => !prev);
  }, []);

  const noOfLines = React.useMemo(() => {
    return variant !== "contextual" || readMoreActive ? undefined : 2;
  }, [readMoreActive, variant]);

  return (
    <HStack key={review.id} align="top">
      <Box pt={1}>
        {variant === "simple" ? (
          <Avatar
            name={review.user.name}
            src={review.user.avatarUrl || ""}
            size="sm"
          />
        ) : (
          <RouterLink to={`/game/${review.game.id}`}>
            <Image
              cursor="pointer"
              src={review.game.coverUrl || ""}
              height="82px"
              width="82px"
              objectFit="cover"
              borderRadius="6px"
            />
          </RouterLink>
        )}
      </Box>
      <Box flex={1}>
        <HStack>
          <Text fontWeight="bold" fontSize="md">
            {review.title}
          </Text>

          <Spacer />
          <Text fontWeight="bold">{review.score}/10</Text>
        </HStack>

        <Text
          fontSize="sm"
          cursor={variant === "contextual" ? "pointer" : "default"}
          onClick={handleReadMoreClick}
          noOfLines={noOfLines}
        >
          {review.comment}
        </Text>
        <HStack align="flex-start">
          <Box align="left">
            <Text fontSize="xs" color="gray.400">
              {review.user.username},{" "}
              {format(new Date(review.createdAt), "dd MMMM yyyy")}
            </Text>
          </Box>
          <Spacer />
          {variant === "contextual" && (
            <Text fontSize="xs" textAlign="left" color="gray.400">
              <Link as={RouterLink} to={`/game/${review.game.id}`}>
                {review.game.name}
              </Link>
            </Text>
          )}
        </HStack>
      </Box>
    </HStack>
  );
};

ReviewCard.defaultProps = {
  variant: "simple",
};

export default ReviewCard;
