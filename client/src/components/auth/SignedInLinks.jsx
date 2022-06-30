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
    <div className="flex gap-5">
         <h2 className="text-primary font-normal">Welcome {currentUser.name}</h2>
      <Link to="/myAds" className="text-focus bg-primary rounded-lg px-2">My Ads</Link>
      <button onClick={onLogOut} className="text-alert">Logout</button>
    </div>
  );
};

export default SignedInLinks;
