import background from "../imagen/background1.jpg";
import logo from "../imagen/logo1-removebg-preview.png";
import ButtonBack from "../Componentes/ButtonBack";

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
      ></div>
      <ButtonBack />
    </div>
  );
};

export default Bebidas;
