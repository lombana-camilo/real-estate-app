import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./../../store/users/usersSlice.js";

const SignedInLinks = ({currentUser}) => {
  const dispatch = useDispatch();
   const navigate = useNavigate()

  const onLogOut = () => {
    dispatch(logout());
      navigate("/properties")

  };

  return (
    <div className="flex flex-col md:flex-row md:gap-5 items-center ">
         <h2 className="text-primary text-sm font-normal">Welcome {currentUser.name}</h2>
         <div className="flex gap-2">
            <Link to="/myAds" className="text-focus bg-primary rounded-lg px-2 mb-1">My Ads</Link>
            <button onClick={onLogOut} className="text-alert">Logout</button>
         </div>
    </div>
  );
};

export default SignedInLinks;
