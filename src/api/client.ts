export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    return Promise.resolve({} as T);
  },
  post: async <T>(url: string, data?: unknown): Promise<T> => {
    return Promise.resolve({} as T);
  },
  put: async <T>(url: string, data?: unknown): Promise<T> => {
    return Promise.resolve({} as T);
  },
  delete: async <T>(url: string): Promise<T> => {
    return Promise.resolve({} as T);
  },
};
