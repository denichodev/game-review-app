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
// GraphQL query operation: GameById
// ====================================================

export interface GameById_game_by_pk_genres_genre {
  __typename: "genre";
  id: number;
  name: string;
}

export interface GameById_game_by_pk_genres {
  __typename: "game_genre";
  /**
   * An object relationship
   */
  genre: GameById_game_by_pk_genres_genre;
}

export interface GameById_game_by_pk {
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
  genres: GameById_game_by_pk_genres[];
}

export interface GameById {
  /**
   * fetch data from the table: "game" using primary key columns
   */
  game_by_pk: GameById_game_by_pk | null;
}

export interface GameByIdVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GameReview
// ====================================================

export interface GameReview_review_user {
  __typename: "user";
  id: number;
  avatarUrl: string | null;
  name: string;
  username: string;
}

export interface GameReview_review {
  __typename: "review";
  id: number;
  title: string;
  comment: string;
  score: number;
  /**
   * An object relationship
   */
  user: GameReview_review_user;
}

export interface GameReview {
  /**
   * fetch data from the table: "review"
   */
  review: GameReview_review[];
}

export interface GameReviewVariables {
  where?: review_bool_exp | null;
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

// ====================================================
// GraphQL fragment: review
// ====================================================

export interface review_user {
  __typename: "user";
  id: number;
  avatarUrl: string | null;
  name: string;
  username: string;
}

export interface review {
  __typename: "review";
  id: number;
  title: string;
  comment: string;
  score: number;
  /**
   * An object relationship
   */
  user: review_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'.
 */
export interface game_bool_exp {
  _and?: (game_bool_exp | null)[] | null;
  _not?: game_bool_exp | null;
  _or?: (game_bool_exp | null)[] | null;
  coverUrl?: String_comparison_exp | null;
  createdAt?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  developer?: String_comparison_exp | null;
  genres?: game_genre_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  releaseYear?: numeric_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "game_genre". All fields are combined with a logical 'AND'.
 */
export interface game_genre_bool_exp {
  _and?: (game_genre_bool_exp | null)[] | null;
  _not?: game_genre_bool_exp | null;
  _or?: (game_genre_bool_exp | null)[] | null;
  game?: game_bool_exp | null;
  game_id?: Int_comparison_exp | null;
  genre?: genre_bool_exp | null;
  genre_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "genre". All fields are combined with a logical 'AND'.
 */
export interface genre_bool_exp {
  _and?: (genre_bool_exp | null)[] | null;
  _not?: genre_bool_exp | null;
  _or?: (genre_bool_exp | null)[] | null;
  game_genres?: game_genre_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * expression to compare columns of type numeric. All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'.
 */
export interface review_bool_exp {
  _and?: (review_bool_exp | null)[] | null;
  _not?: review_bool_exp | null;
  _or?: (review_bool_exp | null)[] | null;
  comment?: String_comparison_exp | null;
  game?: game_bool_exp | null;
  game_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  score?: Int_comparison_exp | null;
  title?: String_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: Int_comparison_exp | null;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'.
 */
export interface user_bool_exp {
  _and?: (user_bool_exp | null)[] | null;
  _not?: user_bool_exp | null;
  _or?: (user_bool_exp | null)[] | null;
  avatarUrl?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  username?: String_comparison_exp | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
