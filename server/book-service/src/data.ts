import { Book, Genre } from "./model";

export const books: Book[] = [
  {
    bookUid: `1`,
    authors: [{ authorUid: `1` }],
    title: `It doesn't have to be crazy at work`,
    description: ``,
    genre: Genre.GENRE_UNSPECIFIED,
    published_at: `2018-10-02`,
    price: 1399
  },
  {
    bookUid: `2`,
    authors: [{ authorUid: `1` }],
    title: `Getting Real`,
    description: `The Smarter, Faster, Easier Way to Build a Successful Web Application`,
    genre: Genre.GENRE_UNSPECIFIED,
    published_at: `2009-11-18`,
    price: 2400
  },
  {
    bookUid: `3`,
    authors: [{ authorUid: `2` }],
    title: `1984`,
    description: ``,
    genre: Genre.GENRE_NOVEL,
    published_at: `2019`,
    price: 609
  }
];
