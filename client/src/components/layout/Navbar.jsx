import { Link } from "react-router-dom";
import SignedInLinks from "./../auth/SignedInLinks";
import SignedOutLinks from "./../auth/SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center fixed top-0 left-0 right-0 z-50 shadow-lg font-semibold bg-bg ">
         <Link to="/properties">
            <h1 className=" text-2xl text-focus">Real Estate App</h1>
         </Link>
      <SignedInLinks />
      <SignedOutLinks />
      <div></div>
    </nav>
  );
};

export default Navbar;
