// package: bev.bookstore.v1
// file: book_service.proto

import * as grpc from 'grpc';
import * as book_service_pb from './book_service_pb';
import * as entities_pb from './entities_pb';

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listBooksByGenre: IBookServiceService_IListBooksByGenre;
  searchBook: IBookServiceService_ISearchBook;
}

interface IBookServiceService_IListBooksByGenre {
  path: string; // "/bev.bookstore.v1.BookService/ListBooksByGenre"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<book_service_pb.ListBooksByGenreRequest>;
  requestDeserialize: grpc.deserialize<book_service_pb.ListBooksByGenreRequest>;
  responseSerialize: grpc.serialize<book_service_pb.ListBooksByGenreResponse>;
  responseDeserialize: grpc.deserialize<book_service_pb.ListBooksByGenreResponse>;
}

interface IBookServiceService_ISearchBook {
  path: string; // "/bev.bookstore.v1.BookService/SearchBook"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<book_service_pb.SearchBookRequest>;
  requestDeserialize: grpc.deserialize<book_service_pb.SearchBookRequest>;
  responseSerialize: grpc.serialize<book_service_pb.SearchBookResponse>;
  responseDeserialize: grpc.deserialize<book_service_pb.SearchBookResponse>;
}

export const BookServiceService: IBookServiceService;
export interface IBookServiceServer {
  listBooksByGenre: grpc.handleUnaryCall<book_service_pb.ListBooksByGenreRequest, book_service_pb.ListBooksByGenreResponse>;
  searchBook: grpc.handleUnaryCall<book_service_pb.SearchBookRequest, book_service_pb.SearchBookResponse>;
}

export interface IBookServiceClient {
  listBooksByGenre(request: book_service_pb.ListBooksByGenreRequest, callback: (error: Error | null, response: book_service_pb.ListBooksByGenreResponse) => void): grpc.ClientUnaryCall;
  listBooksByGenre(request: book_service_pb.ListBooksByGenreRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_service_pb.ListBooksByGenreResponse) => void): grpc.ClientUnaryCall;
  searchBook(request: book_service_pb.SearchBookRequest, callback: (error: Error | null, response: book_service_pb.SearchBookResponse) => void): grpc.ClientUnaryCall;
  searchBook(request: book_service_pb.SearchBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_service_pb.SearchBookResponse) => void): grpc.ClientUnaryCall;
}

export class BookServiceClient extends grpc.Client implements IBookServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public listBooksByGenre(request: book_service_pb.ListBooksByGenreRequest, callback: (error: Error | null, response: book_service_pb.ListBooksByGenreResponse) => void): grpc.ClientUnaryCall;
  public listBooksByGenre(request: book_service_pb.ListBooksByGenreRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_service_pb.ListBooksByGenreResponse) => void): grpc.ClientUnaryCall;
  public searchBook(request: book_service_pb.SearchBookRequest, callback: (error: Error | null, response: book_service_pb.SearchBookResponse) => void): grpc.ClientUnaryCall;
  public searchBook(request: book_service_pb.SearchBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_service_pb.SearchBookResponse) => void): grpc.ClientUnaryCall;
}

