import { gql } from "@apollo/client";

export const reviewFragment = gql`
  fragment review on review {
    id
    title
    comment
    score
    user {
      id
      avatarUrl
      name
      username
    }
  }
`