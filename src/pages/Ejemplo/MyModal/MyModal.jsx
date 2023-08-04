const MyModal = ({ handleModal, imageSelected }) => {
  return (
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
      onClick={handleModal}
    >
      <img
        src={imageSelected}
        alt="Imagen en modal"
        style={{ maxHeight: "90vh", maxWidth: "90vw" }}        
      />,
    </div>
  );
};

export default MyModal;
