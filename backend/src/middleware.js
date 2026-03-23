import { NextResponse } from "next/server";

export function middleware(req) {

  const origin = req.headers.get("origin");
  const allowedDomain = "unitedcareersolution.com";

  const response = NextResponse.next();

  if (origin && origin.endsWith(allowedDomain)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}

export const config = {
  matcher: "/api/:path*",
};