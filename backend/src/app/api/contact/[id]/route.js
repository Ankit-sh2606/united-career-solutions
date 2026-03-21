import connectDB from "@/config/db";
import Contact from "@/models/Contact";
import { successResponse, errorResponse, corsHeaders } from "@/utils/responseHandler";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

/**
 * GET /api/contact/[id]
 * Retrieve a single contact form submission by ID.
 */
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse("Invalid contact ID format", 400);
    }

    await connectDB();

    const contact = await Contact.findById(id);

    if (!contact) {
      return errorResponse("Contact not found", 404);
    }

    return successResponse(contact, "Contact retrieved successfully");
  } catch (error) {
    console.error("Contact GET by ID error:", error);
    return errorResponse("Failed to retrieve contact", 500);
  }
}
