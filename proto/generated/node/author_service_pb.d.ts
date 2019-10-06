// package: bev.bookstore.v1
// file: author_service.proto

import * as jspb from 'google-protobuf';
import * as entities_pb from './entities_pb';

export class ListAuthorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorsRequest): ListAuthorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsRequest;
  static deserializeBinaryFromReader(message: ListAuthorsRequest, reader: jspb.BinaryReader): ListAuthorsRequest;
}

export namespace ListAuthorsRequest {
  export type AsObject = {
  }
}

export class ListAuthorsResponse extends jspb.Message {
  clearAuthorsList(): void;
  getAuthorsList(): Array<entities_pb.Author>;
  setAuthorsList(value: Array<entities_pb.Author>): void;
  addAuthors(value?: entities_pb.Author, index?: number): entities_pb.Author;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorsResponse): ListAuthorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsResponse;
  static deserializeBinaryFromReader(message: ListAuthorsResponse, reader: jspb.BinaryReader): ListAuthorsResponse;
}

export namespace ListAuthorsResponse {
  export type AsObject = {
    authorsList: Array<entities_pb.Author.AsObject>,
  }
}

export class GetAuthorRequest extends jspb.Message {
  getAuthorUid(): string;
  setAuthorUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorRequest): GetAuthorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorRequest;
  static deserializeBinaryFromReader(message: GetAuthorRequest, reader: jspb.BinaryReader): GetAuthorRequest;
}

export namespace GetAuthorRequest {
  export type AsObject = {
    authorUid: string,
  }
}

export class GetAuthorResponse extends jspb.Message {
  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): entities_pb.Author | undefined;
  setAuthor(value?: entities_pb.Author): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorResponse): GetAuthorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorResponse;
  static deserializeBinaryFromReader(message: GetAuthorResponse, reader: jspb.BinaryReader): GetAuthorResponse;
}

export namespace GetAuthorResponse {
  export type AsObject = {
    author?: entities_pb.Author.AsObject,
  }
}

