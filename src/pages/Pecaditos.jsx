import background from "../imagen/background1.jpg";
import entrada from "../imagen/portadaEntrada.jpeg";
import Card from "../Componentes/Card";
import ButtonBack from "../Componentes/ButtonBack";
import NavBar from "../Componentes/NavBar";
import { useState } from "react";
import MyModal from "./Ejemplo/MyModal/MyModal";
import pasabocas from "../imagen/pasabocas.jpg";

const PECADITOS = [
  {
    id: 1,
    src: entrada,
    title: "Deditos Caceros",
    price: "$4.000",
    description:
      "Lorem ipsum dolor sit amet",
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
  {
    id: 4,
    src: pasabocas,
    title: "Otro 3",
    price: "$25.888",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
];

// AQUÍ INICIA EL COMPONENTE:
const Pecaditos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [objetoSelected, setObjetoSelected] = useState(null);

  const handleModal = (objeto) => {
    setObjetoSelected(objeto);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <NavBar />

      <div
        className="flex flex-col justify-start items-center min-h-screen max-w-full "
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(90%)",
        }}
      >
        <div className="m-3  max-w-full max-h-full bg-white bg-auto rounded-xl ">
          <img
            className="max-w-full rounded-t-xl max-h-full"
            src={entrada}
            alt="logo"
          />
        </div>

        {PECADITOS.map((objeto) => {
          return (
            <Card
              key={objeto.id}
              src={objeto.src}
              title={objeto.title}
              price={objeto.price}
              description={objeto.description}
              onClick={() => handleModal(objeto)}
            />
          );
        })}
      </div>

      <ButtonBack />

      {modalOpen && (
        <MyModal handleModal={handleModal} objetoSelected={objetoSelected} />
      )}
    </div>
  );
};

export default Pecaditos;
