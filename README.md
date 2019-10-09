# gRPC & Protocol Buffers

The good, the bad and the ugly

## Description

This repository contains a simplistic sample book webstore project
which is only serving the purpose of being a easily comprehensive
practical example of a microservice architecture with gRPC and
protocol buffers.

## Repository structure

```sh
./proto # contains protocol buffer files
./server # contains multiple microservices delivering data
```

## Running the project

Prerequisite is to have [Docker](https://www.docker.com/products/docker-desktop)
installed and its daemon running.

```sh
docker-compose up # spins up containers and runs the project
docker-compose up -d # does the same but disattaches from logs (use docker-compose stop to stop the containers)
```

## Sending requests to the services

[BloomRPC](https://github.com/uw-labs/bloomrpc) is a great gRPC
client which you can use to send requests to the services.  
URIs to reach those when started with `docker-compose` as described
above are:

- `localhost:50051` for author-service
- `localhost:50052` for book-service

## Manually generating the client libraries for node

After running the following commands the generated client libraries
should be available in folder `./proto/generated/node`.

```sh
cd ./proto
npm install
npm run compile
```
