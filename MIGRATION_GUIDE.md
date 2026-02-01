# Migración de BiciShoop a Next.js ✅

## ¿Qué cambió?

Este proyecto ha sido migrado de **Vite + React Router** a **Next.js 14 (App Router)**.

### Cambios principales:

#### 1. **Estructura de carpetas**
```
Antes (Vite):
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── Pages/
│   ├── Components/
│   └── Context/

Después (Next.js):
├── app/                    # App Router (rutas dinámicas)
│   ├── page.tsx           # Página de inicio
│   ├── layout.tsx         # Layout raíz
│   ├── [ruta]/page.tsx    # Rutas dinámicas
│   └── api/               # API routes
├── src/
│   ├── Pages/             # Componentes de página
│   ├── components/        # Componentes reutilizables
│   ├── context/           # Context API (migrado)
│   └── assets/            # Assets estáticos
```

#### 2. **Dependencias eliminadas**
- ❌ `react-router-dom` - Reemplazado por Next.js routing
- ❌ `vite` - Reemplazado por Next.js build system

#### 3. **Nuevas dependencias**
- ✅ `next` - Framework full-stack
- ✅ TypeScript soporte integrado
- ✅ Image optimization integrado

#### 4. **Cambios en el código**

**Rutas (React Router → Next.js):**
```tsx
// Antes
import { Link } from "react-router-dom";
<Link to="/product/123">Producto</Link>

// Después
import Link from "next/link";
<Link href="/product/123">Producto</Link>
```

**Parámetros de ruta:**
```tsx
// Antes
import { useParams } from "react-router-dom";
const { productId } = useParams();

// Después
import { useParams } from "next/navigation";
const { id: productId } = useParams();
```

**Navegación programática:**
```tsx
// Antes
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/search/" + query);

// Después
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/search/" + query);
```

**Context API:**
```tsx
// Ahora necesita "use client" para client-side state
"use client";
import { createContext, useState } from "react";
```

#### 5. **Scripts de desarrollo**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Cómo ejecutar el proyecto

### Desarrollo
```bash
npm run dev
# Se abrirá en http://localhost:3000
```

### Build/Producción
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

---

## Rutas disponibles

| Ruta | Componente |
|------|-----------|
| `/` | Home |
| `/bicicletas` | Categoría de Bicicletas |
| `/accesorios` | Categoría de Accesorios |
| `/indumentaria` | Categoría de Indumentaria |
| `/novedades` | Página de Novedades |
| `/product/[id]` | Detalle de Producto |
| `/search/[query]` | Resultados de Búsqueda |
| `/cart` | Carrito |
| `/checkout` | Checkout |
| `/login` | Iniciar Sesión |
| `/register` | Registrarse |

---

## Ventajas de la migración

✨ **SEO mejorado** - Soporte para SSR/SSG integrado
🚀 **Performance** - Optimización automática de imágenes y code splitting
📦 **API Routes** - APIs sin necesidad de servidor externo
🔗 **Mejor routing** - File-based routing más intuitivo
🎯 **TypeScript** - Mejor soporte integrado
⚡ **Development DX** - Hot reload más rápido

---

## Problemas comunes

### Error: "Module not found"
Asegúrate de que los path aliases en `tsconfig.json` estén correctos:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/src/*": ["./src/*"]
    }
  }
}
```

### Error: "useContext en componente de servidor"
Asegúrate de agregar `"use client";` al inicio del archivo si usas hooks

### Componentes no cargan
Algunos componentes en `Components_old/` usan React Router todavía. Necesitas migrar los imports a `next/link` y `next/navigation`

---

## Próximos pasos (opcional)

- [ ] Migrar componentes de `Components_old/` a `components/`
- [ ] Usar SSG para páginas estáticas (generateStaticParams)
- [ ] Implementar Image optimization con `next/image`
- [ ] Agregar Middleware para autenticación
- [ ] Considerar usar una librería de estado moderna (Zustand, Jotai)

---

**Migración completada el: 31/01/2026**
