import { Link } from "react-router-dom";

const ButtonBack = () => {
  return (
    <Link to="/" className="w-full flex justify-center">
      <button className="bg-secundary mt-10 mb-7 p-2 w-36 h-10 rounded-3xl shadow-md text-primary font-medium text-lg fixed bottom-0">
        Back
      </button>
    </Link>
  );
};

export default ButtonBack;
