import { Link } from "react-router-dom";
import background from "../imagen/background1.jpg";
import logo from "../imagen/logo1-removebg-preview.png";
import entrada from "../imagen/portadaEntrada.jpeg";
import pasabocas from "../imagen/pasabocas.jpg";
import Card from "../Componentes/Card";

const OBJETOS = [
  {
    id: 1,
    src: entrada,
    title: "Deditos Caceros",
    price: "$4.000",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
  {
    id: 2,
    src: pasabocas,
    title: "Pasabocas title",
    price: "$2.500",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
  {
    id: 3,
    src: pasabocas,
    title: "Otro",
    price: "$3.750",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
];

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
          <img
            className="max-w-full rounded-t-xl max-h-full"
            src={entrada}
            alt="logo"
          />
        </div>

        {OBJETOS.map((objeto) => {
          return (
            <Card
              key={objeto.id}
              src={objeto.src}
              title={objeto.title}
              price={objeto.price}
              description={objeto.description}
            />
          );
        })}
      </div>

      <Link to="/" className="w-full flex justify-center">
        <button className="bg-secundary mt-10 mb-7 p-2 w-36 h-10 rounded-3xl shadow-md text-primary font-medium text-lg fixed bottom-0">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Pecaditos;
