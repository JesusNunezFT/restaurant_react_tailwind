import background from "../imagen/background1.jpg";
import Card from "../Componentes/Card";
import ButtonBack from "../Componentes/ButtonBack";
import NavBar from "../Componentes/NavBar";
import BebidasPortada from "../imagen/bebidasPortadas.jpg";
import BebidaPlatos from "../imagen/bebidaPlato.webp"
import { useState } from "react";
import MyModal from "./Ejemplo/MyModal/MyModal";




const BEBIDAS = [
  {
    id: 1,
    src: BebidaPlatos,
    title: "Deditos Caceros",
    price: "$4.000",
    description:
      "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    src: BebidaPlatos,
    title: "Pasabocas title",
    price: "$2.500",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
  {
    id: 3,
    src: BebidaPlatos,
    title: "Otro",
    price: "$3.750",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
  {
    id: 4,
    src: BebidaPlatos,
    title: "Otro 3",
    price: "$25.888",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus consequatur corrupti sequi in explicabo, provident aliquam veniam, minus nihil dict necessitatibus quae molestiae quisquam deleniti corporis a quod voluptatem",
  },
];

const Bebidas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const handleModal = (currentImage) => {
    setImageSelected(currentImage);
    setModalOpen(!modalOpen);
  };
  return (
    <div>
      <NavBar />
      <div
        className="Box flex flex-col justify-start items-center  min-h-screen max-w-full "
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(90%)",
        }}
      >
        <div className="m-3  max-w-full max-h-full bg-white bg-auto rounded-xl ">
          <img
            className="max-w-full rounded-t-xl max-h-full"
            src={BebidasPortada}
            alt="logo"
          />
        </div>
        {BEBIDAS.map((objeto) => {
          return (
            <Card
              key={objeto.id}
              src={objeto.src}
              title={objeto.title}
              price={objeto.price}
              description={objeto.description}
              onClick={() => handleModal(objeto.src)}
            />
          );
        })}
      </div>

      <ButtonBack />

      {modalOpen && (
        <MyModal handleModal={handleModal} imageSelected={imageSelected} />
      )}
    </div>
  );
};

export default Bebidas;
