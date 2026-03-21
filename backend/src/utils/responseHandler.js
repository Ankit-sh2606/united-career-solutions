import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

/**
 * Return a standardized success JSON response.
 */
export function successResponse(data = null, message = "Success", status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    },
    { status, headers: corsHeaders }
  );
}

/**
 * Return a standardized error JSON response.
 */
export function errorResponse(message = "Something went wrong", status = 500) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status, headers: corsHeaders }
  );
}
