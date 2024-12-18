import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
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
    { icon: Phone, text: "+549 11 1234 5678" },
    { icon: Mail, text: "ventas@bikestore.com.ar" },
    {
      icon: MapPin,
      text: "BikeStore BA Av. Corrientes 1234, Ciudad Autónoma de Buenos Aires, CABA, Argentina",
    },
  ];

  const social = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-background font-poppins text-foreground border-t ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">NAVEGACIÓN</h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">INFO</h2>
            <ul className="space-y-2">
              {info.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">REDES SOCIALES</h2>
            <div className="flex space-x-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            COPYRIGHT BIKE STORE - {new Date().getFullYear()}. TODOS LOS
            DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">
              Creado por: DanielBeinat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
