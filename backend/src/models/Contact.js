import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address",
    ],
  },
  phone: {
    type: String,
    required: false,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  role: { type: String, enum: ["Candidate", "Employer"] },
  company: { type: String, trim: true },
  linkedin: { type: String, trim: true },
  isRead: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model recompilation during hot reload
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
