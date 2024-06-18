import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartModal } from "../CartModal/CartModal";
import { Context, ContextValue } from "../../Context/Context";
import bike2 from "../../assets/bike2.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { getTotalcartItems } = useContext(Context) as ContextValue;

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const Navlink = [
    { name: "Inicio", to: "/" },
    { name: "Bicicletas", to: "/bicicletas" },
    { name: "Accesorios", to: "/accesorios" },
    { name: "Indumentaria", to: "/indumentaria" },
    { name: "Cuenta", to: "/account", lgOnly: true },
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between  items-center lg:py-5 py-3 px-4 font-poppins lg:px-10  ">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>

        <Link to="/">
          <div className="flex justify-center gap-2 items-center ">
            <img src={bike2} className="lg:w-14 lg:h-14 w-12 h-12" alt="logo" />
            <h1 className="text-base font-medium">Bike Store</h1>
          </div>
        </Link>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden absolute inset-x-0 top-16 bg-white z-50 p-4  ">
            <ul className="flex flex-col items-center space-y-4">
              {Navlink.map((link) => (
                <li
                  className="flex items-center align-center space-x-1"
                  key={link.name}
                >
                  <NavLink onClick={() => setMenuOpen(false)} to={link.to}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <nav className="hidden lg:flex lg:gap-x-12">
          <ul className="flex space-x-10 justify-center items-center">
            {Navlink.map(
              (link) =>
                !link.lgOnly && (
                  <li
                    className="flex items-center align-center space-x-4"
                    key={link.name}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium  p-1 text-black bg-white border-b-2 border-black"
                          : "font-medium text-base hover:text-gray-500"
                      }
                      to={link.to}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </nav>

        <div className="flex space-x-4 ">
          <Link className="hidden lg:block" to="/account">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>

          <div className="relative" onClick={toggleModal}>
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

            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {getTotalcartItems()}
            </span>
          </div>
          <CartModal open={isOpen} setOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};
