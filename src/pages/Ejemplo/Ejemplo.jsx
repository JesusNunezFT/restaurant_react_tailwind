import pasabocas from "../../imagen/pasabocas.jpg";
import { useState } from "react";
import MyModal from "./MyModal/MyModal";

const Ejemplo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const handleModal = (currentImage) => {
    setImageSelected(currentImage);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <img
        src={pasabocas}
        alt="Imagen"
        className="cursor-pointer w-20"
        onClick={() => handleModal(pasabocas)}
      />

      {modalOpen && (
        <MyModal handleModal={handleModal} imageSelected={imageSelected} />
      )}
    </div>
  );
};

export default Ejemplo;
