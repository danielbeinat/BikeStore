import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareInstagram,
  faSquareXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="font-poppins">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 border  lg:justify-items-center px-10 items-start lg:place-content-center py-16 text-sm lg:text-base">
          <div>
            <h1 className="font-bold pb-4">NAVEGACIÓN</h1>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-gray-500 hover:underline">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="hover:text-gray-500 hover:underline">
                <Link to={"/bicicletas"}>Bicicletas</Link>
              </li>
              <li className="hover:text-gray-500 hover:underline">
                <Link to={"/accesorios"}>Accesorios</Link>
              </li>
              <li className="hover:text-gray-500 hover:underline">
                <Link to={"/indumentaria"}>Indumentaria</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold pb-4">INFO</h1>
            <ul className="flex flex-col gap-2 ">
              <li className="hover:text-gray-500 hover:underline">
                <a href="">Cambios y devoluciones</a>
              </li>
              <li className="hover:text-gray-500 hover:underline">
                <a href="">Preguntas frecuentes</a>
              </li>
              <li className="hover:text-gray-500 hover:underline">
                <a href="">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold pb-4">Contactános</h1>
            <ul className="flex flex-col gap-2 ">
              <li className="flex gap-1 align-center items-center">
                <FontAwesomeIcon icon={faPhone} />
                <span className=" text-sm">+549 11 1234 5678</span>
              </li>
              <li className="flex gap-1 align-center items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className=" text-sm ">ventas@bikestore.com.ar</span>
              </li>
              <li className="flex gap-1 align-center">
                <FontAwesomeIcon icon={faLocationDot} />

                <address className="text-sm">
                  BikeStore BA Av. Corrientes 1234, Ciudad Autónoma de Buenos
                  Aires, CABA, Argentina
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold pb-4">REDES SOCIALES</h1>

            <ul className="flex gap-2">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    className=" text-3xl  rounded"
                    icon={faFacebookSquare}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    className="text-3xl rounded"
                    icon={faSquareInstagram}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    className="text-3xl rounded"
                    icon={faSquareXTwitter}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 justify-between lg:items-center px-10 py-5 bg-gray-800  text-white text-xs lg:xs">
          <p>COPYRIGHT BIKE STORE - 2024. TODOS LOS DERECHOS RESERVADOS.</p>

          <p>creador por: DanielBeinat</p>
        </div>
      </footer>
    </>
  );
};
