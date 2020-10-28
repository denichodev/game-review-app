/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllGames
// ====================================================

export interface AllGames_game_genres_genre {
  __typename: "genre";
  id: number;
  name: string;
}

export interface AllGames_game_genres {
  __typename: "game_genre";
  /**
   * An object relationship
   */
  genre: AllGames_game_genres_genre;
}

export interface AllGames_game {
  __typename: "game";
  id: number;
  name: string;
  description: string | null;
  coverUrl: string | null;
  releaseYear: any | null;
  developer: string | null;
  /**
   * An array relationship
   */
  genres: AllGames_game_genres[];
}

export interface AllGames {
  /**
   * fetch data from the table: "game"
   */
  game: AllGames_game[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: game
// ====================================================

export interface game_genres_genre {
  __typename: "genre";
  id: number;
  name: string;
}

export interface game_genres {
  __typename: "game_genre";
  /**
   * An object relationship
   */
  genre: game_genres_genre;
}

export interface game {
  __typename: "game";
  id: number;
  name: string;
  description: string | null;
  coverUrl: string | null;
  releaseYear: any | null;
  developer: string | null;
  /**
   * An array relationship
   */
  genres: game_genres[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
