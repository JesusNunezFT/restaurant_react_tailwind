import NavBar from "./Componentes/NavBar";
import background from "./imagen/imagen2.png";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <div
        className="Box flex flex-col justify-start items-center  min-h-screen max-w-7xl "
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(90%)",
        }}
      >
        <button className="cursor-auto bg-secundary mt-10 mb-7 p-2 w-36 h-10 rounded-3xl shadow-md text-primary font-medium text-lg">
          Menú
        </button>
        <Link to="/Entradas">
          <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
            Entradas
          </button>
        </Link>
        <Link to="/Pecaditos">
          <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
            Pecaditos
          </button>
        </Link>
        <Link to="/Bebidas">
          <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
            Bebidas
          </button>
        </Link>
        <Link to="/Especiales">
          <button className="bg-primary m-7 mb-7 p-2 w-60 h-16 rounded-3xl shadow-md text-secundary font-medium text-2xl">
            Especiales
          </button>
        </Link>
      </div>
    </div>
  );
}
