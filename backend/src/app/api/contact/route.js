import connectDB from "@/config/db";
import Contact from "@/models/Contact";
import { validateContactInput } from "@/validations/contactValidation";
import { successResponse, errorResponse, corsHeaders } from "@/utils/responseHandler";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

/**
 * POST /api/contact
 * Submit a new contact form entry.
 * Authentication: NOT required.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate inputs
    const { isValid, errors } = validateContactInput(body);
    if (!isValid) {
      return errorResponse(errors.join(", "), 400);
    }

    // Connect to database
    await connectDB();

    // Sanitize and save
    const contact = await Contact.create({
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.toString().trim(),
      message: body.message.trim(),
    });

    return successResponse(
      { id: contact._id },
      "Contact form submitted successfully",
      201
    );
  } catch (error) {
    console.error("Contact POST error:", error);
    return errorResponse("Failed to submit contact form", 500);
  }
}
