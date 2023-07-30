import { Link } from "react-router-dom";
import background from "../imagen/background1.jpg";
import logo from "../imagen/logo1-removebg-preview.png"

const Bebidas = () => {
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
        <Link to="/">Back</Link>
        </button>
        
      </div>
    </div>
    
  );
};

export default Bebidas;
