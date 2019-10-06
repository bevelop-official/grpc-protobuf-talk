# gRPC & Protocol Buffers

The good, the bad and the ugly

## Description

This repository contains a simplistic sample book webstore project
which is only serving the purpose of being a easily comprehensive
practical example of a microservice architecture with gRPC and
protocol buffers.

## Repository structure

```sh
./client # contains a sample client application fetching data
./proto # contains protocol buffer files
./server # contains multiple microservices delivering data
```

## Running the project

Prerequisite is to have [Docker](https://www.docker.com/products/docker-desktop) installed and its daemon running.

```sh
docker-compose up # spins up containers and runs the project
docker-compose up -d # does the same but disattaches from logs (use docker-compose stop to stop the containers)
```
