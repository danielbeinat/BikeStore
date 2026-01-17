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
 * Environment variables should be prefixed with VITE_ for Vite to expose them
 * Example: VITE_API_BASE_URL=https://api.example.com
 */
export const getEnvConfig = (): EnvConfig => {
  const env = import.meta.env.MODE || "development";

  return {
    apiBaseUrl:
      import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
    apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
    environment:
      (env as "development" | "staging" | "production") || "development",
    enableDebug:
      import.meta.env.VITE_ENABLE_DEBUG === "true" || env === "development",
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
