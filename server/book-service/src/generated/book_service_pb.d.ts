// package: bev.bookstore.v1
// file: book_service.proto

import * as jspb from 'google-protobuf';
import * as entities_pb from './entities_pb';

export class ListBooksByGenreRequest extends jspb.Message {
  getGenre(): entities_pb.Genre;
  setGenre(value: entities_pb.Genre): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksByGenreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksByGenreRequest): ListBooksByGenreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBooksByGenreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksByGenreRequest;
  static deserializeBinaryFromReader(message: ListBooksByGenreRequest, reader: jspb.BinaryReader): ListBooksByGenreRequest;
}

export namespace ListBooksByGenreRequest {
  export type AsObject = {
    genre: entities_pb.Genre,
  }
}

export class ListBooksByGenreResponse extends jspb.Message {
  clearBooksList(): void;
  getBooksList(): Array<entities_pb.Book>;
  setBooksList(value: Array<entities_pb.Book>): void;
  addBooks(value?: entities_pb.Book, index?: number): entities_pb.Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksByGenreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksByGenreResponse): ListBooksByGenreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBooksByGenreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksByGenreResponse;
  static deserializeBinaryFromReader(message: ListBooksByGenreResponse, reader: jspb.BinaryReader): ListBooksByGenreResponse;
}

export namespace ListBooksByGenreResponse {
  export type AsObject = {
    booksList: Array<entities_pb.Book.AsObject>,
  }
}

export class SearchBookRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBookRequest): SearchBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBookRequest;
  static deserializeBinaryFromReader(message: SearchBookRequest, reader: jspb.BinaryReader): SearchBookRequest;
}

export namespace SearchBookRequest {
  export type AsObject = {
    query: string,
  }
}

export class SearchBookResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<entities_pb.Book>;
  setResultsList(value: Array<entities_pb.Book>): void;
  addResults(value?: entities_pb.Book, index?: number): entities_pb.Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBookResponse): SearchBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBookResponse;
  static deserializeBinaryFromReader(message: SearchBookResponse, reader: jspb.BinaryReader): SearchBookResponse;
}

export namespace SearchBookResponse {
  export type AsObject = {
    resultsList: Array<entities_pb.Book.AsObject>,
  }
}

