// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_service_pb = require('./book_service_pb.js');
var entities_pb = require('./entities_pb.js');

function serialize_bev_bookstore_v1_ListBooksByGenreRequest(arg) {
  if (!(arg instanceof book_service_pb.ListBooksByGenreRequest)) {
    throw new Error('Expected argument of type bev.bookstore.v1.ListBooksByGenreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_ListBooksByGenreRequest(buffer_arg) {
  return book_service_pb.ListBooksByGenreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_ListBooksByGenreResponse(arg) {
  if (!(arg instanceof book_service_pb.ListBooksByGenreResponse)) {
    throw new Error('Expected argument of type bev.bookstore.v1.ListBooksByGenreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_ListBooksByGenreResponse(buffer_arg) {
  return book_service_pb.ListBooksByGenreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_SearchBookRequest(arg) {
  if (!(arg instanceof book_service_pb.SearchBookRequest)) {
    throw new Error('Expected argument of type bev.bookstore.v1.SearchBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_SearchBookRequest(buffer_arg) {
  return book_service_pb.SearchBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_SearchBookResponse(arg) {
  if (!(arg instanceof book_service_pb.SearchBookResponse)) {
    throw new Error('Expected argument of type bev.bookstore.v1.SearchBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_SearchBookResponse(buffer_arg) {
  return book_service_pb.SearchBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// BookService is responsible for managing books and searching the library.
var BookServiceService = exports.BookServiceService = {
  // ListBooksByGenre returns a list of book items by genre
  listBooksByGenre: {
    path: '/bev.bookstore.v1.BookService/ListBooksByGenre',
    requestStream: false,
    responseStream: false,
    requestType: book_service_pb.ListBooksByGenreRequest,
    responseType: book_service_pb.ListBooksByGenreResponse,
    requestSerialize: serialize_bev_bookstore_v1_ListBooksByGenreRequest,
    requestDeserialize: deserialize_bev_bookstore_v1_ListBooksByGenreRequest,
    responseSerialize: serialize_bev_bookstore_v1_ListBooksByGenreResponse,
    responseDeserialize: deserialize_bev_bookstore_v1_ListBooksByGenreResponse,
  },
  // SearchBook returns a list of book items related to the search query
  searchBook: {
    path: '/bev.bookstore.v1.BookService/SearchBook',
    requestStream: false,
    responseStream: false,
    requestType: book_service_pb.SearchBookRequest,
    responseType: book_service_pb.SearchBookResponse,
    requestSerialize: serialize_bev_bookstore_v1_SearchBookRequest,
    requestDeserialize: deserialize_bev_bookstore_v1_SearchBookRequest,
    responseSerialize: serialize_bev_bookstore_v1_SearchBookResponse,
    responseDeserialize: deserialize_bev_bookstore_v1_SearchBookResponse,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
