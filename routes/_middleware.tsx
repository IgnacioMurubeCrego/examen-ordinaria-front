import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../types.ts";

export const handler: MiddlewareHandler = async (
  _req: Request,
  ctx: FreshContext,
) => {
  try {
    const result = await axios.get<Character[]>(
      `https://hp-api.onrender.com/api/characters`,
    );
    ctx.state.characters = result.data;
  } catch {
    ctx.state.characters = [];
  }
  return await ctx.next();
};

export const cookieHandler: MiddlewareHandler = (
  _req: Request,
  ctx: FreshContext,
) => {
  const headers = new Headers();
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toUTCString();
  headers.append("Set-Cookie", `name=;expires=${expires};path=/`);
  return ctx.render(null, { headers });
};
