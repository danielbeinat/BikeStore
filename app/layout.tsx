import type { Metadata } from "next";
import "@/src/index.css";
import { ContextProvider } from "@/src/context/Context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "BiciShoop - La mejor tienda de bicicletas",
  description:
    "Encuentra todo lo que necesitas para tu bicicleta: bicicletas, accesorios e indumentaria deportiva de las mejores marcas.",
  keywords:
    "bicicletas, accesorios bicicleta, indumentaria deportiva, tienda online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ContextProvider>
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </ContextProvider>
      </body>
    </html>
  );
}
