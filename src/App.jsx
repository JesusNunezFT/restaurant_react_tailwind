import background from "./imagen/imagen2.png";
import logo from "./imagen/logo1-removebg-preview.png";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="flex justify-center items-center max-w-full bg-primary h-28 p-1 ">
        <img className="w-56 h-28" src={logo} alt="logo" />
      </nav>
      <div
        className="Box flex flex-col justify-start items-center  min-h-screen max-w-7xl "
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(90%)",
        }}
      >
        <button className="bg-secundary mt-10 mb-7 p-2 w-36 h-10 rounded-3xl shadow-md text-primary font-medium text-lg">
          Menú
        </button>
        <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
          <Link to="/Entradas">Entradas</Link>
        </button>
        <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
          <Link to="/Pecaditos">Pecaditos</Link>
        </button>
        <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
          <Link to="/Bebidas">Bebidas</Link>
        </button>
        <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
          <Link to="/Especiales">Especiales</Link>
        </button>
      </div>
    </div>
  );
}
