import { gql } from "@apollo/client";

export const reviewFragment = gql`
  fragment review on review {
    id
    title
    comment
    score
    createdAt
    user {
      id
      avatarUrl
      name
      username
    }
    game {	
    	id
      name
      coverUrl
    }
  }
`

export const ALL_REVIEWS_QUERY = gql`
query AllReviews($order_by: [review_order_by!]) {
  review(order_by: $order_by) {
    ...review
  }
}

  ${reviewFragment}
`;
