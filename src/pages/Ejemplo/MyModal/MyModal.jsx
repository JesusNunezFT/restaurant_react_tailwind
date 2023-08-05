const MyModal = ({ handleModal, imageSelected }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center"
      onClick={handleModal}
    >
      <img
        src={imageSelected}
        alt="Imagen en modal"
        className="max-h-[90vh] max-w-[90vw] rounded-2xl"
      />
    </div>
  );
};

export default MyModal;
