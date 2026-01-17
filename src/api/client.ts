/**
 * Mock API client for development
 * Replace with actual API implementation when backend is ready
 */
export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    console.warn("Mock API call - replace with actual implementation");
    return Promise.resolve({} as T);
  },
  post: async <T>(url: string, data?: unknown): Promise<T> => {
    console.warn("Mock API call - replace with actual implementation");
    return Promise.resolve({} as T);
  },
  put: async <T>(url: string, data?: unknown): Promise<T> => {
    console.warn("Mock API call - replace with actual implementation");
    return Promise.resolve({} as T);
  },
  delete: async <T>(url: string): Promise<T> => {
    console.warn("Mock API call - replace with actual implementation");
    return Promise.resolve({} as T);
  },
};
