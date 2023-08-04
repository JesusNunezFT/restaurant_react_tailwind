import logo from "../imagen/logo1-removebg-preview.png";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center max-w-full bg-primary h-28 p-1 ">
      <img className="w-56 h-28" src={logo} alt="logo" />
    </nav>
  );
};

export default NavBar;
