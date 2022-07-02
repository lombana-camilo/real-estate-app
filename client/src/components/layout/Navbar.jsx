import {BsSearch} from "react-icons/bs";
import { Link } from "react-router-dom";
import SignedInLinks from "./../auth/SignedInLinks";
import SignedOutLinks from "./../auth/SignedOutLinks";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <nav className="flex px-2 justify-evenly h-12 text-lg items-center fixed top-0 left-0 right-0 z-50 shadow-lg font-semibold bg-bg ">
         {currentUser?.name ?
         <Link to="/"> <h1 className=" text-xl md:text-2xl text-focus">RealEstate</h1> </Link>
         :
            <Link to="/"> <h1 className=" text-xl md:text-2xl text-focus">RealEstate App</h1> </Link>
      }
      <Link to="/properties"> <BsSearch/> </Link>
      {currentUser.name ? <SignedInLinks currentUser={currentUser}/> : <SignedOutLinks />}
    </nav>
  );
};

export default Navbar;
