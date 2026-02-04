# BiciShoop - Tienda de Bicicletas en Next.js

Aplicación e-commerce de bicicletas migrada de Vite + React Router a **Next.js 14** con TypeScript, Tailwind CSS y Context API.

## 🚀 Deployment en Vercel (Recomendado)

### Paso 1: Preparación

```bash
git add .
git commit -m "Migrate from Netlify to Vercel"
git push origin main
```

### Paso 2: Deploy a Vercel

1. Ve a [vercel.com](https://vercel.com/signup)
2. Conecta tu GitHub
3. Selecciona el repositorio "BiciShoop"
4. Haz click en "Import"
5. Vercel detecta automáticamente Next.js
6. Haz click en "Deploy"

### Paso 3: Configurar Variables de Entorno

En Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_API_BASE_URL = https://tu-api.com/api
NEXT_PUBLIC_ENABLE_DEBUG = false
```

**Listo!** Tu aplicación estará en vivo en ~1 minuto.

## 📋 Características Técnicas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Estado Global**: React Context API
- **Animaciones**: Framer Motion
- **Validación**: React Hook Form + Zod
- **Toasts**: React Hot Toast
- **Carrusel**: Swiper
- **Iconos**: Lucide React

## 🏠 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Build para producción
npm run build

# Ejecutar producción localmente
npm run start
```

## 📁 Estructura del Proyecto

```
BiciShoop/
├── app/                    # Rutas Next.js (App Router)
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Layout global con Context
│   ├── [ruta]/page.tsx    # Rutas dinámicas
│   └── ...
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── Components_old/    # Componentes legados (migrados)
│   ├── Pages/             # Páginas de contenido
│   ├── context/           # Context API (estado global)
│   ├── assets/            # Imágenes, SVGs
│   ├── utils/             # Utilidades
│   └── config/            # Configuración
├── public/                # Archivos estáticos
├── vercel.json           # Configuración de Vercel
├── next.config.js        # Configuración de Next.js
├── tsconfig.json         # TypeScript config
└── tailwind.config.js    # Tailwind CSS config
```

## 🛒 Funcionalidades

✅ Catálogo de productos (bicicletas, accesorios, indumentaria)  
✅ Carrito de compras con Context API  
✅ Wishlist (lista de deseos)  
✅ Sistema de búsqueda  
✅ Filtrado por categoría  
✅ Ordenamiento de productos  
✅ Detalle de producto  
✅ Responsive Design (mobile, tablet, desktop)  
✅ Animaciones suaves

## 🔧 Configuración de Vercel

Ver archivo [VERCEL_SETUP.md](./VERCEL_SETUP.md) para:

- Setup detallado de Vercel
- Variables de entorno
- Dominio personalizado
- Troubleshooting

## 📊 Performance

Vercel proporciona:

- Edge Network global
- Optimización automática de Next.js
- Analytics en tiempo real
- Previsualización de cambios en PRs
- SSL automático

## 🔄 Migraciones Completadas

- ✅ Vite → Next.js 14
- ✅ React Router → Next.js Routing
- ✅ Netlify → Vercel
- ✅ Todos los componentes actualizados

## 📝 Notas

- La aplicación usa rendering dinámico (no estática)
- Context API maneja el estado global de carrito/wishlist
- Imagenes optimizadas con Next.js Image
- TypeScript para seguridad de tipos

## 📞 Soporte

Para issues en Vercel:

- [Vercel Support](https://vercel.com/support)
- [Vercel Docs](https://vercel.com/docs)

Para issues de Next.js:

- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
