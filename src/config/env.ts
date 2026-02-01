/**
 * Environment configuration
 *
 * Centralized access to environment variables with type safety
 * and default values for development.
 */

interface EnvConfig {
  apiBaseUrl: string;
  apiTimeout: number;
  environment: "development" | "staging" | "production";
  enableDebug: boolean;
}

/**
 * Get environment configuration
 *
 * Environment variables in Next.js should be prefixed with NEXT_PUBLIC_ for client-side access
 * Example: NEXT_PUBLIC_API_BASE_URL=https://api.example.com
 */
export const getEnvConfig = (): EnvConfig => {
  const env = process.env.NODE_ENV || "development";

  return {
    apiBaseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
    apiTimeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
    environment:
      (env as "development" | "staging" | "production") || "development",
    enableDebug:
      process.env.NEXT_PUBLIC_ENABLE_DEBUG === "true" || env === "development",
  };
};

/**
 * Check if running in production
 */
export const isProduction = (): boolean => {
  return getEnvConfig().environment === "production";
};

/**
 * Check if running in development
 */
export const isDevelopment = (): boolean => {
  return getEnvConfig().environment === "development";
};

// Export singleton instance
export const env = getEnvConfig();
