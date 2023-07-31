import pasabocas from "../../imagen/pasabocas.jpg";
import { useState } from "react";

const Ejemplo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(pasabocas);

  const toggleModal = () => {
    setImageSelected(pasabocas)
    setModalOpen(!modalOpen);
  };


  return (
    <div>
      <img
        src={imageSelected}
        alt="Imagen"
        className="cursor-pointer w-20"
        onClick={toggleModal}
      />

      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={toggleModal}
        >
          <img
            src={imageSelected}
            alt="Imagen en modal"
            style={{ maxHeight: "90vh", maxWidth: "90vw" }}
          />
        </div>
      )}
    </div>
  );
};

export default Ejemplo;
