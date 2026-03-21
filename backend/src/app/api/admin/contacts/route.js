import connectDB from "@/config/db";
import Contact from "@/models/Contact";
import { successResponse, errorResponse, corsHeaders } from "@/utils/responseHandler";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

/**
 * GET /api/admin/contacts
 * Retrieve all contact form submissions (newest first).
 * Authentication: Optional for now (can be added later using verifyAdmin middleware).
 */
export async function GET(request) {
  try {
    await connectDB();

    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();

    return successResponse(
      contacts,
      "Contacts retrieved successfully"
    );
  } catch (error) {
    console.error("Admin contacts GET error:", error);
    return errorResponse("Failed to retrieve contacts", 500);
  }
}
