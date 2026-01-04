import { NextResponse } from "next/server";

export function internalServerError(message = "Internal server error") {
  return NextResponse.json(
    {
      error: message,
    },
    { status: 500 }
  );
}
