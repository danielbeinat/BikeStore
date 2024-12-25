import { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search } from "./Search/Search";

import { Context, ContextValue } from "../../Context/Context";
import { CartModal } from "../CartModal/CartModal";
import Bikeshoop from "../../assets/Bikeshoop.png";
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { getTotalcartItems } = useContext(Context) as ContextValue;

  const Navlink = [
    { name: "INICIO", to: "/" },
    { name: "NOVEDADES", to: "/novedades" },
    { name: "BICICLETAS", to: "/bicicletas" },
    { name: "ACCESORIOS", to: "/accesorios" },
    { name: "INDUMENTARIA", to: "/indumentaria" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Muestra el banner solo cuando scrollY está en la parte superior (0)
      setShowBanner(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all font-poppins duration-300">
      <div
        className={`bg-black text-white py-2 px-4 text-center transition-all duration-300 ${
          showBanner ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-sm">
          3 y 6 CUOTAS FIJAS | ENVÍO GRATIS A PARTIR DE $50.000 ⚡
        </p>
      </div>

      <header
        className={`bg-white font-poppins transition-all duration-300 ${
          showBanner ? "" : "-translate-y-9 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full lg:w-1/4">
              <Search />
            </div>

            <Link
              to="/"
              className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={Bikeshoop}
                  className="h-16 w-auto"
                  alt="Estacion Bike"
                />
              </div>
            </Link>

            <div className="flex items-center gap-6 w-full lg:w-1/4 justify-end">
              <div className="flex items-center gap-2">
                <Link
                  to="/register"
                  className="text-sm font-medium hover:text-blak"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  CREAR CUENTA
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  to="/login"
                  className="text-sm font-medium hover:text-black"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  INICIAR SESIÓN
                </Link>
              </div>

              <div className="relative" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                {getTotalcartItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalcartItems()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-blak focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
              <div className="bg-black rounded-lg">
                <ul className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-8 py-4">
                  {Navlink.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `text-white text-sm font-medium hover:text-gray-300 transition-colors ${
                            isActive ? "border-b-2 border-white pb-1" : ""
                          }`
                        }
                        onClick={() => {
                          setMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <CartModal open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};
