"use client";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "react-hot-toast";
import { Context, ContextValue } from "@/src/context/Context";
import {
  Mail,
  User,
  MapPin,
  CreditCard,
  ChevronRight,
  Check,
} from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

// Schemas de validación para cada paso
const emailSchema = z.object({
  email: z.string().min(1, "El email es requerido").email("Email inválido"),
});

const personalDataSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: z
    .string()
    .min(1, "El apellido es requerido")
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  telefono: z
    .string()
    .min(1, "El teléfono es requerido")
    .regex(/^[0-9+\-\s()]+$/, "Teléfono inválido"),
});

const deliverySchema = z.object({
  direccion: z
    .string()
    .min(1, "La dirección es requerida")
    .min(5, "La dirección debe tener al menos 5 caracteres"),
  ciudad: z.string().min(1, "La ciudad es requerida"),
  codigoPostal: z
    .string()
    .min(1, "El código postal es requerido")
    .regex(/^[0-9]+$/, "Código postal inválido"),
});

type EmailFormValues = z.infer<typeof emailSchema>;
type PersonalDataFormValues = z.infer<typeof personalDataSchema>;
type DeliveryFormValues = z.infer<typeof deliverySchema>;

type CheckoutStep = 1 | 2 | 3 | 4;

export default function Checkout() {
  const { getTotalCartAmount } = useContext(Context) as ContextValue;
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(1);
  const [completedSteps, setCompletedSteps] = useState<CheckoutStep[]>([]);
  const [formData, setFormData] = useState<{
    email?: string;
    personalData?: PersonalDataFormValues;
    delivery?: DeliveryFormValues;
  }>({});

  // Formulario para paso 1 - Email
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
  });

  // Formulario para paso 2 - Datos personales
  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: { errors: personalErrors },
  } = useForm<PersonalDataFormValues>({
    resolver: zodResolver(personalDataSchema),
  });

  // Formulario para paso 3 - Entrega
  const {
    register: registerDelivery,
    handleSubmit: handleSubmitDelivery,
    formState: { errors: deliveryErrors },
  } = useForm<DeliveryFormValues>({
    resolver: zodResolver(deliverySchema),
  });

  const onEmailSubmit = (data: EmailFormValues) => {
    setFormData((prev) => ({ ...prev, email: data.email }));
    setCompletedSteps((prev) => [...prev, 1]);
    setCurrentStep(2);
    toast.success("Email validado correctamente");
  };

  const onPersonalDataSubmit = (data: PersonalDataFormValues) => {
    setFormData((prev) => ({ ...prev, personalData: data }));
    setCompletedSteps((prev) => [...prev, 2]);
    setCurrentStep(3);
    toast.success("Datos personales guardados");
  };

  const onDeliverySubmit = (data: DeliveryFormValues) => {
    setFormData((prev) => ({ ...prev, delivery: data }));
    setCompletedSteps((prev) => [...prev, 3]);
    setCurrentStep(4);
    toast.success("Datos de entrega guardados");
  };

  const goToStep = (step: CheckoutStep) => {
    // Solo permitir ir a pasos completados o al siguiente paso
    const maxAllowedStep = Math.max(...completedSteps, currentStep);
    if (step <= maxAllowedStep + 1) {
      setCurrentStep(step);
    }
  };

  const isStepCompleted = (step: CheckoutStep) => completedSteps.includes(step);
  const isStepActive = (step: CheckoutStep) => currentStep === step;

  const StepIndicator = ({
    step,
    title,
    icon: Icon,
  }: {
    step: CheckoutStep;
    title: string;
    icon: React.ElementType;
  }) => {
    const completed = isStepCompleted(step);
    const active = isStepActive(step);
    const clickable = step <= Math.max(...completedSteps, currentStep) + 1;

    return (
      <div
        onClick={() => clickable && goToStep(step)}
        className={clsx(
          "flex items-center gap-4 p-5 rounded-lg transition-all duration-200 cursor-pointer",
          active && "bg-black text-white shadow-lg scale-105",
          !active && completed && "bg-green-50 border-l-4 border-green-500",
          !active && !completed && "bg-gray-100",
          clickable && "hover:shadow-md",
          !clickable && "opacity-50 cursor-not-allowed",
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center w-10 h-10 rounded-full",
            active && "bg-white text-black",
            completed && !active && "bg-green-500 text-white",
            !completed && !active && "bg-gray-300 text-gray-600",
          )}
        >
          {completed && !active ? (
            <Check className="w-5 h-5" />
          ) : (
            <Icon className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h3
            className={clsx(
              "font-semibold uppercase text-sm",
              active && "text-white",
            )}
          >
            {step} - {title}
          </h3>
        </div>
        {active && <ChevronRight className="w-5 h-5" />}
      </div>
    );
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="font-poppins flex flex-col lg:flex-row gap-10 lg:px-20 px-8 mt-10 mb-16">
        <div className="flex flex-col gap-6 md:w-[750px]">
          {/* Paso 1 - Email */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 w-full p-6 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6 text-black" />
                  <h1 className="text-2xl font-bold">1 - Email</h1>
                </div>
                <form
                  onSubmit={handleSubmitEmail(onEmailSubmit)}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={clsx(
                        "block w-full md:w-[400px] rounded-full border-0 py-3 px-4",
                        "text-gray-900 shadow-sm ring-1 ring-inset",
                        "placeholder:text-gray-400",
                        "focus:ring-2 focus:ring-inset focus:ring-black",
                        "outline-none transition-all duration-200",
                        emailErrors.email && "ring-red-500 focus:ring-red-500",
                      )}
                      {...registerEmail("email")}
                    />
                    {emailErrors.email && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {emailErrors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white p-3 rounded-full w-32 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Paso 2 - Datos Personales */}
          <AnimatePresence mode="wait">
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 w-full p-6 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-6 h-6 text-black" />
                  <h1 className="text-2xl font-bold">2 - Datos Personales</h1>
                </div>
                <form
                  onSubmit={handleSubmitPersonal(onPersonalDataSubmit)}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className={clsx(
                        "block w-full rounded-full border-0 py-3 px-4",
                        "text-gray-900 shadow-sm ring-1 ring-inset",
                        "placeholder:text-gray-400",
                        "focus:ring-2 focus:ring-inset focus:ring-black",
                        "outline-none transition-all duration-200",
                        personalErrors.nombre &&
                          "ring-red-500 focus:ring-red-500",
                      )}
                      {...registerPersonal("nombre")}
                    />
                    {personalErrors.nombre && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {personalErrors.nombre.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Apellido"
                      className={clsx(
                        "block w-full rounded-full border-0 py-3 px-4",
                        "text-gray-900 shadow-sm ring-1 ring-inset",
                        "placeholder:text-gray-400",
                        "focus:ring-2 focus:ring-inset focus:ring-black",
                        "outline-none transition-all duration-200",
                        personalErrors.apellido &&
                          "ring-red-500 focus:ring-red-500",
                      )}
                      {...registerPersonal("apellido")}
                    />
                    {personalErrors.apellido && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {personalErrors.apellido.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className={clsx(
                        "block w-full rounded-full border-0 py-3 px-4",
                        "text-gray-900 shadow-sm ring-1 ring-inset",
                        "placeholder:text-gray-400",
                        "focus:ring-2 focus:ring-inset focus:ring-black",
                        "outline-none transition-all duration-200",
                        personalErrors.telefono &&
                          "ring-red-500 focus:ring-red-500",
                      )}
                      {...registerPersonal("telefono")}
                    />
                    {personalErrors.telefono && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {personalErrors.telefono.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="bg-gray-200 text-gray-800 p-3 rounded-full flex-1 font-semibold hover:bg-gray-300 transition-colors duration-200"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white p-3 rounded-full flex-1 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Siguiente
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Paso 3 - Entrega */}
          <AnimatePresence mode="wait">
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 w-full p-6 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-black" />
                  <h1 className="text-2xl font-bold">3 - Entrega</h1>
                </div>
                <form
                  onSubmit={handleSubmitDelivery(onDeliverySubmit)}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Dirección"
                      className={clsx(
                        "block w-full rounded-full border-0 py-3 px-4",
                        "text-gray-900 shadow-sm ring-1 ring-inset",
                        "placeholder:text-gray-400",
                        "focus:ring-2 focus:ring-inset focus:ring-black",
                        "outline-none transition-all duration-200",
                        deliveryErrors.direccion &&
                          "ring-red-500 focus:ring-red-500",
                      )}
                      {...registerDelivery("direccion")}
                    />
                    {deliveryErrors.direccion && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {deliveryErrors.direccion.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ciudad"
                        className={clsx(
                          "block w-full rounded-full border-0 py-3 px-4",
                          "text-gray-900 shadow-sm ring-1 ring-inset",
                          "placeholder:text-gray-400",
                          "focus:ring-2 focus:ring-inset focus:ring-black",
                          "outline-none transition-all duration-200",
                          deliveryErrors.ciudad &&
                            "ring-red-500 focus:ring-red-500",
                        )}
                        {...registerDelivery("ciudad")}
                      />
                      {deliveryErrors.ciudad && (
                        <p className="mt-1.5 text-sm text-red-500">
                          {deliveryErrors.ciudad.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Código Postal"
                        className={clsx(
                          "block w-full rounded-full border-0 py-3 px-4",
                          "text-gray-900 shadow-sm ring-1 ring-inset",
                          "placeholder:text-gray-400",
                          "focus:ring-2 focus:ring-inset focus:ring-black",
                          "outline-none transition-all duration-200",
                          deliveryErrors.codigoPostal &&
                            "ring-red-500 focus:ring-red-500",
                        )}
                        {...registerDelivery("codigoPostal")}
                      />
                      {deliveryErrors.codigoPostal && (
                        <p className="mt-1.5 text-sm text-red-500">
                          {deliveryErrors.codigoPostal.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="bg-gray-200 text-gray-800 p-3 rounded-full flex-1 font-semibold hover:bg-gray-300 transition-colors duration-200"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white p-3 rounded-full flex-1 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Siguiente
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Paso 4 - Pago */}
          <AnimatePresence mode="wait">
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 w-full p-6 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-6 h-6 text-black" />
                  <h1 className="text-2xl font-bold">4 - Pago</h1>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Métodos de pago disponibles:
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        className="w-4 h-4"
                      />
                      <span>Tarjeta de crédito/débito</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        className="w-4 h-4"
                      />
                      <span>Transferencia bancaria</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        className="w-4 h-4"
                      />
                      <span>Efectivo</span>
                    </label>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="bg-gray-200 text-gray-800 p-3 rounded-full flex-1 font-semibold hover:bg-gray-300 transition-colors duration-200"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      toast.success("¡Compra realizada exitosamente!");
                      // TODO: Implementar lógica de pago
                    }}
                    className="bg-green-600 text-white p-3 rounded-full flex-1 font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Indicadores de pasos */}
          <div className="flex flex-col gap-4 mt-6">
            <StepIndicator step={1} title="Email" icon={Mail} />
            <StepIndicator step={2} title="Datos Personales" icon={User} />
            <StepIndicator step={3} title="Entrega" icon={MapPin} />
            <StepIndicator step={4} title="Pago" icon={CreditCard} />
          </div>
        </div>

        {/* Resumen de compra */}
        <div className="flex flex-col gap-4 h-fit shadow-lg p-6 w-64 lg:w-80 rounded-lg bg-white sticky top-4">
          <h1 className="text-center font-bold text-xl mb-4">
            Resumen de Compra
          </h1>
          <div>
            <div className="flex justify-between py-4">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-700 font-semibold">
                $ {getTotalCartAmount().toLocaleString()}
              </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between py-4">
              <p className="text-gray-500">Envío</p>
              <p className="text-gray-700 font-semibold">Gratis</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between py-4">
              <p className="text-gray-900 font-bold text-lg">Total</p>
              <p className="font-bold text-lg text-black">
                $ {getTotalCartAmount().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
