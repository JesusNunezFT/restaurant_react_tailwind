const MyModal = ({ handleModal, objetoSelected }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center"
      onClick={handleModal}
    >
      <div className="w-full h-full max-h-[90vh] max-w-[90vw] flex justify-center">
        <img
          src={objetoSelected.src}
          alt="Imagen en modal"
          className="w-full rounded-2xl object-contain"
        />
        <div className="absolute bottom-20 text-white bg-gray px-5 py-2 rounded-2xl max-w-[80vw]">
          {objetoSelected.description}
        </div>

      </div>
    </div>
  );
};

export default MyModal;
