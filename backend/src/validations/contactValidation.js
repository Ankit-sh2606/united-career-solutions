/**
 * Validate contact form input fields.
 * Returns an object with `isValid` boolean and `errors` array.
 */
export function validateContactInput({ firstName, lastName, email, role, company, linkedin, message }) {
  const errors = [];

  // First Name validation
  if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
    errors.push("First name is required");
  } else if (firstName.trim().length < 2) {
    errors.push("First name must be at least 2 characters long");
  }

  // Last Name validation
  if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0) {
    errors.push("Last name is required");
  } else if (lastName.trim().length < 2) {
    errors.push("Last name must be at least 2 characters long");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    errors.push("Email is required");
  } else if (!emailRegex.test(email.trim())) {
    errors.push("Please provide a valid email address");
  }

  // Role validation
  if (!role || typeof role !== "string") {
    errors.push("Role is required");
  } else if (role !== "Candidate" && role !== "Employer") {
    errors.push("Role must be Candidate or Employer");
  }

  // Company validation
  if (role === "Employer") {
    if (!company || typeof company !== "string" || company.trim().length === 0) {
      errors.push("Company name is required for employers");
    }
  }

  // LinkedIn validation
  if (role === "Candidate") {
    if (!linkedin || typeof linkedin !== "string" || linkedin.trim().length === 0) {
      errors.push("LinkedIn profile URL is required for candidates");
    } else if (!linkedin.includes("linkedin.com/")) {
      errors.push("Please provide a valid LinkedIn profile URL");
    }
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
