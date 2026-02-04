"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "react-hot-toast";
import { Mail, Lock, LogIn, Github } from "lucide-react";
import { clsx } from "clsx";

const loginSchema = z.object({
  email: z.string().min(1, "El email es requerido").email("Email inválido"),
  password: z
    .string()
    .min(1, "La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      // TODO: Implement actual API call
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // TODO: Handle authentication response and store token securely
      toast.success("¡Inicio de sesión exitoso!");
    } catch (error) {
      toast.error("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-black p-2 ring-8 ring-blue-100">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="w-full">
              <div className="relative">
                <input
                  placeholder="tu@email.com"
                  type="email"
                  autoComplete="email"
                  className={clsx(
                    "block w-full rounded-xl border-0 py-3 pl-12 pr-3",
                    "text-gray-900 shadow-sm",
                    "ring-1 ring-inset ring-gray-200",
                    "placeholder:text-gray-400",
                    "focus:ring-2 focus:ring-inset focus:ring-blue-500",
                    "outline-none transition-all duration-200",
                    "sm:text-sm sm:leading-6",
                    errors.email && "ring-red-500 focus:ring-red-500",
                  )}
                  {...register("email")}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="w-full">
              <div className="relative">
                <input
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                  className={clsx(
                    "block w-full rounded-xl border-0 py-3 pl-12 pr-3",
                    "text-gray-900 shadow-sm",
                    "ring-1 ring-inset ring-gray-200",
                    "placeholder:text-gray-400",
                    "focus:ring-2 focus:ring-inset focus:ring-blue-500",
                    "outline-none transition-all duration-200",
                    "sm:text-sm sm:leading-6",
                    errors.password && "ring-red-500 focus:ring-red-500",
                  )}
                  {...register("password")}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <div className="space-y-3">
              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={clsx(
                  "relative flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3",
                  "text-sm font-semibold transition-all duration-200",
                  "bg-black text-white",
                  "disabled:from-blue-500 disabled:to-blue-400 disabled:opacity-70",
                  isLoading && "cursor-not-allowed",
                )}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  </div>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Iniciar sesión
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <button className="font-medium text-blue-600 hover:text-blue-500">
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
