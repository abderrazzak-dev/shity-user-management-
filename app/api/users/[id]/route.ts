import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/users/[id]">
) {
  const { id } = await ctx.params;

  return Response.json({
    url: request.nextUrl,
    id: id,
  });
}
