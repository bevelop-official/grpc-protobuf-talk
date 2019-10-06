// package: bev.bookstore.v1
// file: entities.proto

import * as jspb from 'google-protobuf';

export class Book extends jspb.Message {
  getBookUid(): string;
  setBookUid(value: string): void;

  clearAuthorsList(): void;
  getAuthorsList(): Array<Author>;
  setAuthorsList(value: Array<Author>): void;
  addAuthors(value?: Author, index?: number): Author;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getGenre(): Genre;
  setGenre(value: Genre): void;

  getPublishedAt(): string;
  setPublishedAt(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): number;
  setPrice(value: number): void;

  getPriceOneofCase(): Book.PriceOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    bookUid: string,
    authorsList: Array<Author.AsObject>,
    title: string,
    description: string,
    genre: Genre,
    publishedAt: string,
    price: number,
  }

  export enum PriceOneofCase {
    PRICEONEOF_NOT_SET = 0,
    PRICEONEOF = 7,
  }
}

export class Author extends jspb.Message {
  getAuthorUid(): string;
  setAuthorUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getBirthdate(): string;
  setBirthdate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Author.AsObject;
  static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Author;
  static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
  export type AsObject = {
    authorUid: string,
    name: string,
    birthdate: string,
  }
}

export enum Genre {
  GENRE_INVALID = 0,
  GENRE_UNSPECIFIED = 1,
  GENRE_NOVEL = 2,
  GENRE_THRILLER = 3,
  GENRE_COMEDY = 4,
}

