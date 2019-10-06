export enum Genre {
  GENRE_INVALID = 0,
  GENRE_UNSPECIFIED = 1,
  GENRE_NOVEL = 2,
  GENRE_THRILLER = 3,
  GENRE_COMEDY = 4
}

export interface Book {
  bookUid: string;
  authors: Partial<Author>[];
  title: string;
  description: string;
  genre: Genre;
  published_at: string;
  price?: number;
}

export interface Author {
  authorUid: string;
  name: string;
  birthdate: string;
}
