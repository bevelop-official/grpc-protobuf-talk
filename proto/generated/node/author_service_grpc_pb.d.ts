// package: bev.bookstore.v1
// file: author_service.proto

import * as grpc from 'grpc';
import * as author_service_pb from './author_service_pb';
import * as entities_pb from './entities_pb';

interface IAuthorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listAuthors: IAuthorServiceService_IListAuthors;
  getAuthor: IAuthorServiceService_IGetAuthor;
}

interface IAuthorServiceService_IListAuthors {
  path: string; // "/bev.bookstore.v1.AuthorService/ListAuthors"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<author_service_pb.ListAuthorsRequest>;
  requestDeserialize: grpc.deserialize<author_service_pb.ListAuthorsRequest>;
  responseSerialize: grpc.serialize<author_service_pb.ListAuthorsResponse>;
  responseDeserialize: grpc.deserialize<author_service_pb.ListAuthorsResponse>;
}

interface IAuthorServiceService_IGetAuthor {
  path: string; // "/bev.bookstore.v1.AuthorService/GetAuthor"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<author_service_pb.GetAuthorRequest>;
  requestDeserialize: grpc.deserialize<author_service_pb.GetAuthorRequest>;
  responseSerialize: grpc.serialize<author_service_pb.GetAuthorResponse>;
  responseDeserialize: grpc.deserialize<author_service_pb.GetAuthorResponse>;
}

export const AuthorServiceService: IAuthorServiceService;
export interface IAuthorServiceServer {
  listAuthors: grpc.handleUnaryCall<author_service_pb.ListAuthorsRequest, author_service_pb.ListAuthorsResponse>;
  getAuthor: grpc.handleUnaryCall<author_service_pb.GetAuthorRequest, author_service_pb.GetAuthorResponse>;
}

export interface IAuthorServiceClient {
  listAuthors(request: author_service_pb.ListAuthorsRequest, callback: (error: Error | null, response: author_service_pb.ListAuthorsResponse) => void): grpc.ClientUnaryCall;
  listAuthors(request: author_service_pb.ListAuthorsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: author_service_pb.ListAuthorsResponse) => void): grpc.ClientUnaryCall;
  getAuthor(request: author_service_pb.GetAuthorRequest, callback: (error: Error | null, response: author_service_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
  getAuthor(request: author_service_pb.GetAuthorRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: author_service_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
}

export class AuthorServiceClient extends grpc.Client implements IAuthorServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public listAuthors(request: author_service_pb.ListAuthorsRequest, callback: (error: Error | null, response: author_service_pb.ListAuthorsResponse) => void): grpc.ClientUnaryCall;
  public listAuthors(request: author_service_pb.ListAuthorsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: author_service_pb.ListAuthorsResponse) => void): grpc.ClientUnaryCall;
  public getAuthor(request: author_service_pb.GetAuthorRequest, callback: (error: Error | null, response: author_service_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
  public getAuthor(request: author_service_pb.GetAuthorRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: author_service_pb.GetAuthorResponse) => void): grpc.ClientUnaryCall;
}

