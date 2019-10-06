import * as Mali from "mali";
import * as path from "path";
import { ListAuthors, GetAuthor } from "./controller";

const PROTO_PATH: string = path.resolve(
  __dirname,
  `../../../proto/author_service.proto`
);
const APP_GRPC_PORT: number = Number(process.env.APP_GRPC_PORT) || 50051;

const app = new Mali(PROTO_PATH);
app.use(async (ctx: Mali.Context, next: any) => {
  console.log({ request: ctx.fullName });
  await next();
  console.dir({ response: ctx.res }, { depth: null });
});
app.use({ ListAuthors, GetAuthor });
app.on(`error`, async (error: any, ctx: Mali.Context) => {
  console.error(error.message || `Unknown error occured`);
  if (!error.message) {
    console.error(error);
  }
});
app.start(`0.0.0.0:${APP_GRPC_PORT}`);
console.log(`author-service listening on port ${APP_GRPC_PORT}`);
