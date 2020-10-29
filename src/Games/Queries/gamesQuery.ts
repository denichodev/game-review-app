import { gql } from "@apollo/client";
import {reviewFragment} from '../../Reviews/Queries/reviewsQuery'

export const gameFragment = gql`
  fragment game on game {
    id
    name
    description
    coverUrl
    releaseYear
    developer
    genres {
      genre {
        id
        name
      }
    }
  }
`;

export const ALL_GAMES_QUERY = gql`
  query AllGames {
    game(order_by: { releaseYear: asc }) {
      ...game
    }
  }

  ${gameFragment}
`;

export const GAME_BY_ID_QUERY = gql`
  query GameById($id: Int!) {
    game_by_pk(id: $id) {
      ...game
    }
  }

  ${gameFragment}
`;

export const GAME_REVIEW = gql`
  query GameReview($where: review_bool_exp) {
    review(where: $where) {
      ...review
    }
  }

  ${reviewFragment}
`;

