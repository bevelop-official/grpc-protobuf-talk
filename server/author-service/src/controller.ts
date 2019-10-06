import * as grpc from "grpc";
import Mali = require("mali");
import GRPCError = require("grpc-error");
import { authors } from "./data";

export async function ListAuthors(ctx: Mali.Context): Promise<void> {
  ctx.res = { authors };
}

export async function GetAuthor(ctx: Mali.Context): Promise<void> {
  const authorUid = ctx.req.authorUid;
  const author = authors.find(author => author.authorUid === authorUid);
  if (!author) {
    throw new GRPCError(`NotFoundError`, grpc.status.NOT_FOUND);
  }
  ctx.res = { author };
}
