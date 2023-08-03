import { Link } from "react-router-dom";
import background from "../imagen/background1.jpg";
import logo from "../imagen/logo1-removebg-preview.png";
import entrada from "../imagen/portadaEntrada.jpeg";
import pasabocas from "../imagen/pasabocas.jpg"

const Pecaditos = () => {
  return (
    <div>
      <nav className="flex justify-center items-center max-w-full bg-primary h-28 p-1 ">
        <img className="w-56 h-28" src={logo} alt="logo" />
      </nav>
      <div
        className="Box flex flex-col justify-start items-center min-h-screen max-w-7xl "
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(90%)",
        }}
      >
        <div className="contentCart m-3  max-w-full max-h-full bg-white bg-auto rounded-xl ">
          <img className="max-w-full rounded-t-xl max-h-full" src={entrada} alt="logo" />
          <div className="infoPlat flex flex-row ms:justify-start items-center md:justify-evenly m-1 ">
            <img className="imgPlat m-3  w-20 h-20 rounded-xl" src={pasabocas} alt=" " />
            <div className="md:flex md:flex-row md:items-center md:center">
              <div className="flex flex-col items-center mr-5 justify-evenly">
                <h1 className="font-extrabold md:text-l sm:text-xs m-1">Deditos Caceros</h1>
                <h3 className="text-red  text-xl font-extrabold m-1">$7.000</h3>
              </div>
              <h2 className="flex flex-row m-2" >Lorem ipsum dolor sit amet, consectetur</h2>
            </div>
            
          </div>
          <div className="infoPlat flex flex-row">
            <img className="imgPlat m-5 w-20 h-20 rounded-xl" src={pasabocas} alt=" " />
            <div>
              <div className="flex flex-row m-5 justify-around">
                <h1 className="font-extrabold text-l mr-2">Carne al Carbon</h1>
                <h3 className="text-red text-xl font-semibold">$28.000</h3>
              </div>
              <h2 className="flex flex-row m-5" >Deliciosa pechuga a la plancha  </h2>
            </div>            
          </div>
          <div className="infoPlat flex flex-row">
            <img className="imgPlat m-5 w-20 h-20 rounded-xl" src={pasabocas} alt=" " />
            <div>
              <div className="flex flex-row m-5 justify-around">
                <h1 className="font-extrabold text-l mr-2">Pollo a la plancha</h1>
                <h3 className="text-red text-xl font-semibold">$15.000</h3>
              </div>
              <h2 className="flex flex-row m-5" >Ricos deditos relleno de queso </h2>
            </div>
            
          </div>
        </div>
        <button className="bg-secundary mt-10 mb-7 p-2 w-36 h-10 rounded-3xl shadow-md text-primary font-medium text-lg">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Pecaditos;
