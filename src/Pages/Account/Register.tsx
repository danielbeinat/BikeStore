import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";
import { Mail, Lock, User, LogIn, Github, UserPlus } from "lucide-react";
import { clsx } from "clsx";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "El nombre es requerido")
      .min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().min(1, "El email es requerido").email("Email inválido"),
    password: z
      .string()
      .min(1, "La contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "La confirmación de contraseña es requerida"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true);
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      toast.success("¡Registro exitoso!");
    } catch (error) {
      toast.error("Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  const Input = ({
    icon,
    error,
    ...props
  }: {
    icon: React.ReactNode;
    error?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="w-full">
      <div className="relative">
        <input
          className={clsx(
            "block w-full rounded-xl border-0 py-3 pl-12 pr-3",
            "text-gray-900 shadow-sm",
            "ring-1 ring-inset ring-gray-200",
            "placeholder:text-gray-400",
            "focus:ring-2 focus:ring-inset focus:ring-blue-500",
            "outline-none transition-all duration-200",
            "sm:text-sm sm:leading-6",
            error && "ring-red-500 focus:ring-red-500"
          )}
          {...props}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
      </div>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-black p-2 ring-8 ring-blue-100">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Crear Cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <Input
              placeholder="Tu nombre"
              type="text"
              autoComplete="name"
              icon={<User className="w-5 h-5" />}
              error={errors.name?.message}
              {...register("name")}
            />

            {/* Email Input */}
            <Input
              placeholder="tu@email.com"
              type="email"
              autoComplete="email"
              icon={<Mail className="w-5 h-5" />}
              error={errors.email?.message}
              {...register("email")}
            />

            {/* Password Input */}
            <Input
              placeholder="••••••••"
              type="password"
              autoComplete="new-password"
              icon={<Lock className="w-5 h-5" />}
              error={errors.password?.message}
              {...register("password")}
            />

            {/* Confirm Password Input */}
            <Input
              placeholder="••••••••"
              type="password"
              autoComplete="new-password"
              icon={<Lock className="w-5 h-5" />}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <div className="space-y-3">
              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={clsx(
                  "relative flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3",
                  "text-sm font-semibold transition-all duration-200",
                  "bg-black text-white",
                  "active:from-blue-700 active:to-blue-600",
                  "disabled:from-blue-500 disabled:to-blue-400 disabled:opacity-70",
                  isLoading && "cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  </div>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Crear cuenta
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <button className="font-medium text-blue-600 hover:text-blue-500">
              Inicia sesión aquí
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
