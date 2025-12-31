import { NextResponse } from "next/server";
import { logger } from "./logger";

export function handleError(error: unknown, context: string) {
  const isProd = process.env.NODE_ENV === "production";

  let message = "Unknown error";
  let stack: string | undefined;

  if (error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  logger.error(`Error in ${context}`, {
    message,
    stack: isProd ? "REDACTED" : stack,
  });

  return NextResponse.json(
    {
      success: false,
      message: isProd
        ? "Something went wrong. Please try again later."
        : message,
      ...(isProd ? {} : { stack }),
    },
    { status: 500 }
  );
}
