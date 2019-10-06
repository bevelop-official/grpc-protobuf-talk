import * as grpc from "grpc";
import Mali = require("mali");
import { books } from "./data";
import { AuthorServiceClient } from "./generated/author_service_grpc_pb";
import * as model from "./model";
import { ListAuthorsRequest } from "./generated/author_service_pb";
import { Author } from "./generated/entities_pb";

const client = new AuthorServiceClient(
  `author-service:50051`,
  grpc.credentials.createInsecure()
);
let authorsCached: Author.AsObject[] = [];

export async function ListBooksByGenre(ctx: Mali.Context): Promise<void> {
  const genre = ctx.req.genre;
  if (authorsCached.length === 0) {
    authorsCached = await listAuthors();
  }
  const filteredBooks = books
    .filter(book => book.genre === genre)
    .map(book => enhanceBookWithAuthor(book, authorsCached));
  console.log(filteredBooks);
  ctx.res = { books: filteredBooks };
}

export async function SearchBook(ctx: Mali.Context): Promise<void> {
  const query = ctx.req.query;
  if (authorsCached.length === 0) {
    authorsCached = await listAuthors();
  }
  const filteredBooks = books
    .filter(book => book.title.includes(query))
    .map(book => enhanceBookWithAuthor(book, authorsCached));
  ctx.res = { results: filteredBooks };
}

function enhanceBookWithAuthor(
  book: model.Book,
  authors: Author.AsObject[]
): model.Book {
  if (!book.authors || book.authors.length === 0) {
    return book;
  }
  book.authors = book.authors.map(
    author => authors.find(a => a.authorUid === author.authorUid) || author
  );
  return book;
}

async function listAuthors(): Promise<Author.AsObject[]> {
  return new Promise((resolve, reject) => {
    const req = new ListAuthorsRequest();
    client.listAuthors(req, (error, res) => {
      if (error !== null) {
        console.error(error.message);
        reject(error);
      }
      resolve(res.toObject().authorsList);
    });
  });
}
