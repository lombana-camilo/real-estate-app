import { Link } from "react-router-dom";
import SignedInLinks from "./../auth/SignedInLinks";
import SignedOutLinks from "./../auth/SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center shadow-lg font-semibold ">
         <Link to="/">
            <h1 className=" text-2xl text-focus">Real Estate App</h1>
         </Link>
      <SignedInLinks />
      <SignedOutLinks />
      <div></div>
    </nav>
  );
};

export default Navbar;
