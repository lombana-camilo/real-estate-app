import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./../../store/users/usersSlice.js";

const SignedInLinks = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate()

  const onLogOut = () => {
    dispatch(logout());
      navigate("/properties")

  };

  return (
    <div className="flex gap-3">
      <Link to="/myAds">My Ads</Link>
      <button onClick={onLogOut}>Logout</button>
    </div>
  );
};

export default SignedInLinks;
