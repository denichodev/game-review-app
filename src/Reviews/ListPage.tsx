import * as React from "react";
import { Box, Stack, StackDivider } from "@chakra-ui/core";
import { ALL_REVIEWS_QUERY } from "./Queries/reviewsQuery";
import { useQuery } from "@apollo/client";

import PageHeader from "../Layout/PageHeader";
import ReviewCard from "./ReviewCard";
import { AllReviews } from "../../globalTypes";

const GameListPage = () => {
  const reviewsResult = useQuery<AllReviews>(ALL_REVIEWS_QUERY);
  const reviews = reviewsResult?.data?.review;

  if (reviewsResult.loading || !reviews) {
    return (
      <Box>
        <PageHeader title="Latest Reviews" />
      </Box>
    );
  }

  console.log(reviewsResult);

  return (
    <Box>
      <PageHeader title="Latest Reviews" />
      <Stack divider={<StackDivider borderColor="gray.700" />}>
        {reviews.map((review) => {
          return <ReviewCard review={review} variant="contextual" />;
        })}
      </Stack>
    </Box>
  );
};

export default GameListPage;
