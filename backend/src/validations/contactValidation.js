/**
 * Validate contact form input fields.
 * Returns an object with `isValid` boolean and `errors` array.
 */
export function validateContactInput({ fullName, email, phone, message }) {
  const errors = [];

  // Full Name validation
  if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
    errors.push("Full name is required");
  } else if (fullName.trim().length < 3) {
    errors.push("Full name must be at least 3 characters long");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    errors.push("Email is required");
  } else if (!emailRegex.test(email.trim())) {
    errors.push("Please provide a valid email address");
  }

  // Phone validation
  const phoneDigitsOnly = phone ? phone.toString().replace(/\D/g, "") : "";
  if (!phone || phone.toString().trim().length === 0) {
    errors.push("Phone number is required");
  } else if (!/^\d+$/.test(phoneDigitsOnly)) {
    errors.push("Phone number must contain only digits");
  } else if (phoneDigitsOnly.length < 10 || phoneDigitsOnly.length > 15) {
    errors.push("Phone number must be between 10 and 15 digits");
  }

  // Message validation
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    errors.push("Message is required");
  } else if (message.trim().length < 5) {
    errors.push("Message must be at least 5 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
