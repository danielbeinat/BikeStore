# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000

# Environment
VITE_ENVIRONMENT=development

# Debug Mode (set to 'true' to enable debug logging)
VITE_ENABLE_DEBUG=false
```

## Important Notes

1. **Never commit `.env` files** - They are already in `.gitignore`
2. **Use different values for different environments:**

   - Development: `VITE_API_BASE_URL=http://localhost:3000/api`
   - Staging: `VITE_API_BASE_URL=https://api-staging.example.com`
   - Production: `VITE_API_BASE_URL=https://api.example.com`

3. **Vite requires `VITE_` prefix** - Only variables prefixed with `VITE_` are exposed to the client

4. **Access in code:**
   ```typescript
   import { env } from "./config/env";
   const apiUrl = env.apiBaseUrl;
   ```

## Security Best Practices

- Store sensitive keys (API keys, secrets) on the backend, not in frontend environment variables
- Frontend environment variables are visible in the browser bundle
- Use backend proxy for sensitive API calls
- Never expose authentication tokens or private keys in frontend env vars
