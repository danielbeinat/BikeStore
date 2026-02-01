# Guía de Deployment en Vercel

## Preparación Rápida (2 minutos)

### 1. Crear cuenta en Vercel
```bash
https://vercel.com/signup
```

### 2. Conectar GitHub
- Autoriza Vercel para acceder a tus repositorios
- Selecciona el repositorio "BiciShoop"

### 3. Configurar Variables de Entorno
En el dashboard de Vercel:

```
NEXT_PUBLIC_API_BASE_URL = https://tu-api.com/api (o la URL de tu backend)
NEXT_PUBLIC_API_TIMEOUT = 10000
NEXT_PUBLIC_ENABLE_DEBUG = false
```

### 4. Deploy
Vercel detecta automáticamente que es un proyecto Next.js y hace:
- `npm install`
- `npm run build`
- `npm run start`

## Beneficios de Vercel para BiciShoop

✅ **Next.js Nativo**: Optimización automática de Next.js  
✅ **Dinámico Perfecto**: Soporta rendering dinámico (tu caso)  
✅ **Zero Config**: Detecta todo automáticamente  
✅ **Edge Functions**: Para rutas dinámicas de API  
✅ **Analytics**: Dashboard de performance  
✅ **Previsualización**: Cada PR muestra una preview  

## Estructura de Deploy

```
Main Branch (main) → Deploy a Production
Pull Requests → Deploy a Preview URLs
```

## URLs Después del Deploy

- **Production**: https://bicishoop.vercel.app (o tu dominio)
- **Preview**: https://bicishoop-pr-123.vercel.app

## Comandos Locales

```bash
# Desarrollo
npm run dev

# Build local (como en Vercel)
npm run build
npm run start

# Limpiar cache
rm -r .next
```

## Dominio Personalizado

En Vercel Dashboard → Settings → Domains:
1. Agrega tu dominio personalizado
2. Actualiza los registros DNS
3. Vercel genera SSL automáticamente

## Troubleshooting

**Error: "Cannot find module"**
- Verifica que los imports usen `@/src/...`
- Limpia cache: `rm -r .next`

**Variables de entorno no cargadas**
- Reindeployea después de actualizar variables en Vercel
- Verifica con `console.log(process.env.NEXT_PUBLIC_API_BASE_URL)`

**Performance lenta**
- Abre Vercel Analytics desde el dashboard
- Optimiza imágenes con `next/image`

## Recursos

- [Docs Vercel Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI](https://vercel.com/cli)
- [Support](https://vercel.com/support)
