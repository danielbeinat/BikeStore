import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Bike,
  Shield,
  Truck,
  CreditCard,
} from "lucide-react";

export function Footer() {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Bicicletas", href: "/bicicletas" },
    { name: "Accesorios", href: "/accesorios" },
    { name: "Indumentaria", href: "/indumentaria" },
  ];

  const info = [
    { name: "Cambios y devoluciones", href: "#" },
    { name: "Preguntas frecuentes", href: "#" },
    { name: "Términos y condiciones", href: "#" },
  ];

  const contact = [
    { icon: Phone, text: "+549 11 1234 5678", label: "Teléfono" },
    { icon: Mail, text: "ventas@bikestore.com.ar", label: "Email" },
    {
      icon: MapPin,
      text: "Av. Corrientes 1234, CABA, Argentina",
      label: "Dirección"
    },
  ];

  const social = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  const features = [
    { icon: Bike, text: "Expertos en ciclismo", color: "text-[#fbbf24]" },
    { icon: Shield, text: "Compra segura", color: "text-green-500" },
    { icon: Truck, text: "Envío garantizado", color: "text-blue-500" },
    { icon: CreditCard, text: "Múltiples pagos", color: "text-purple-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-3">
                BiciShoop
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tu tienda de ciclismo de confianza. Equipos premium, asesoramiento experto y la mejor experiencia de compra.
              </p>
            </div>

            {/* Features badges */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-xs font-medium text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-[#fbbf24]">Navegación</h4>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#fbbf24] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-[#fbbf24]">Información</h4>
            <ul className="space-y-3">
              {info.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#fbbf24] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-[#fbbf24]">Contacto</h4>
            <div className="space-y-4 mb-8">
              {contact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-[#fbbf24]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-4 text-gray-200">Síguenos</h5>
              <div className="flex gap-3">
                {social.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-gray-300 ${item.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom section */}
      <div className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} BiciShoop - Todos los derechos reservados
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>🇦🇷 Hecho con ❤️ en Argentina</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacidad" className="text-sm text-gray-400 hover:text-[#fbbf24] transition-colors duration-300">
                Privacidad
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-[#fbbf24] transition-colors duration-300">
                Cookies
              </Link>
              <div className="text-sm text-gray-500">
                Desarrollado por DanielBeinat
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#fbbf24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
}
