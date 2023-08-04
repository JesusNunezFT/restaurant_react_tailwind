const Card = ({ src, title, price, description }) => {
  return (
    <div className="grid grid-cols-4 bg-white m-3 rounded-xl">
      <div className="col-span-2 sm:col-span-1 flex align-center p-3">
        <img className="object-cover rounded-xl" src={src} alt="imagen" />
      </div>
      <div className="col-span-2 sm:col-span-3 p-3">
        <p className="font-extrabold md:text-l m-1 text-center">{title}</p>
        <p className="text-red  text-xl font-extrabold m-1  text-center">
          {price}
        </p>
        <p className="flex flex-row m-2  text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Card;
