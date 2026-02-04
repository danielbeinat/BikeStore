/**
 * Input sanitization utilities
 * Basic sanitization functions for user inputs
 */
export const sanitizeHTML = (dirty: string): string => {
  // Basic HTML escaping - replace with DOMPurify for production
  return dirty
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};

/**
 * Sanitize text input (removes HTML tags)
 *
 * @param input - The input string
 * @returns Sanitized text string
 */
export const sanitizeText = (input: string): string => {
  // Remove HTML tags
  const withoutTags = input.replace(/<[^>]*>/g, "");
  // Escape special characters
  return sanitizeHTML(withoutTags);
};

/**
 * Sanitize search query
 *
 * @param query - The search query string
 * @returns Sanitized search query
 */
export const sanitizeSearchQuery = (query: string): string => {
  return sanitizeText(query.trim());
};

/**
 * Validate and sanitize product ID
 *
 * @param id - Product ID (string or number)
 * @returns Validated numeric ID or null if invalid
 */
export const sanitizeProductId = (
  id: string | number | undefined
): number | null => {
  if (id === undefined || id === null) {
    return null;
  }

  const numericId = typeof id === "string" ? parseInt(id, 10) : id;

  if (isNaN(numericId) || numericId <= 0 || !isFinite(numericId)) {
    return null;
  }

  return numericId;
};

/**
 * Sanitize email address
 *
 * @param email - Email string
 * @returns Sanitized email or empty string if invalid
 */
export const sanitizeEmail = (email: string): string => {
  const trimmed = email.trim().toLowerCase();
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmed)) {
    return "";
  }

  return sanitizeText(trimmed);
};

/**
 * Sanitize URL
 *
 * @param url - URL string
 * @returns Sanitized URL or empty string if invalid
 */
export const sanitizeUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (urlObj.protocol !== "http:" && urlObj.protocol !== "https:") {
      return "";
    }
    return urlObj.toString();
  } catch {
    return "";
  }
};
