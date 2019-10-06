// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var author_service_pb = require('./author_service_pb.js');
var entities_pb = require('./entities_pb.js');

function serialize_bev_bookstore_v1_GetAuthorRequest(arg) {
  if (!(arg instanceof author_service_pb.GetAuthorRequest)) {
    throw new Error('Expected argument of type bev.bookstore.v1.GetAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_GetAuthorRequest(buffer_arg) {
  return author_service_pb.GetAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_GetAuthorResponse(arg) {
  if (!(arg instanceof author_service_pb.GetAuthorResponse)) {
    throw new Error('Expected argument of type bev.bookstore.v1.GetAuthorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_GetAuthorResponse(buffer_arg) {
  return author_service_pb.GetAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_ListAuthorsRequest(arg) {
  if (!(arg instanceof author_service_pb.ListAuthorsRequest)) {
    throw new Error('Expected argument of type bev.bookstore.v1.ListAuthorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_ListAuthorsRequest(buffer_arg) {
  return author_service_pb.ListAuthorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bev_bookstore_v1_ListAuthorsResponse(arg) {
  if (!(arg instanceof author_service_pb.ListAuthorsResponse)) {
    throw new Error('Expected argument of type bev.bookstore.v1.ListAuthorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bev_bookstore_v1_ListAuthorsResponse(buffer_arg) {
  return author_service_pb.ListAuthorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// AuthorService is responsible for managing authors.
var AuthorServiceService = exports.AuthorServiceService = {
  // ListAuthors returns an array of author items
  listAuthors: {
    path: '/bev.bookstore.v1.AuthorService/ListAuthors',
    requestStream: false,
    responseStream: false,
    requestType: author_service_pb.ListAuthorsRequest,
    responseType: author_service_pb.ListAuthorsResponse,
    requestSerialize: serialize_bev_bookstore_v1_ListAuthorsRequest,
    requestDeserialize: deserialize_bev_bookstore_v1_ListAuthorsRequest,
    responseSerialize: serialize_bev_bookstore_v1_ListAuthorsResponse,
    responseDeserialize: deserialize_bev_bookstore_v1_ListAuthorsResponse,
  },
  // GetAuthor returns a single author item if found
  getAuthor: {
    path: '/bev.bookstore.v1.AuthorService/GetAuthor',
    requestStream: false,
    responseStream: false,
    requestType: author_service_pb.GetAuthorRequest,
    responseType: author_service_pb.GetAuthorResponse,
    requestSerialize: serialize_bev_bookstore_v1_GetAuthorRequest,
    requestDeserialize: deserialize_bev_bookstore_v1_GetAuthorRequest,
    responseSerialize: serialize_bev_bookstore_v1_GetAuthorResponse,
    responseDeserialize: deserialize_bev_bookstore_v1_GetAuthorResponse,
  },
};

exports.AuthorServiceClient = grpc.makeGenericClientConstructor(AuthorServiceService);
