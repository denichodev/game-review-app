import { gql } from "@apollo/client";

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
