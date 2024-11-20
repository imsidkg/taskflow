import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/components/features/auth/server/route";
import workspaces from "@/components/features/workspaces/server/route";
import members from "@/components/features/members/server/route";
import projects from "@/components/features/projects/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/auth", auth)
  .route("/workspaces", workspaces)
  .route("/members", members)
  .route("/projects" , projects)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export type AppType = typeof routes;
