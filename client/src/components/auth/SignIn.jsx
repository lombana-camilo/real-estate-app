import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./../../store/users/usersSlice.js";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { currentUser } = useSelector((state) => state.users);

  const handleSignUp = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

   useEffect(()=>{
      currentUser.name && navigate("/myads")
   },[currentUser,navigate])

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around inset-y-64 inset-x-1/3 absolute top-36"
    >
      <h5 className="text-2xl font-bold">Sign In</h5>
      <label>
        Email
        <input
          className="w-full"
          type="email"
          name="email"
          placeholder="sample@gmail.com"
          onChange={handleSignUp}
        />
        {/* {error.email && signup.email && ( */}
        {/*   <span className="text-focus text-xs flex absolute"> */}
        {/*     {error.email} */}
        {/*   </span> */}
        {/* )} */}
      </label>
      <label>
        Password
        <input
          className="w-full"
          type="password"
          name="password"
          placeholder="*****"
          onChange={handleSignUp}
        />
        {/* {error.password && signup.password && ( */}
        {/*   <span className="text-focus text-xs flex absolute"> */}
        {/*     {error.password} */}
        {/*   </span> */}
        {/* )} */}
      </label>
      <div>
        {/* <button */}
        {/*   disabled={error.email || error.password} */}
        {/*   className="bg-secondary disabled:bg-focus" */}
        {/* > */}
        {/*   SignUp */}
        {/* </button> */}
        {/* {logMessage.error && ( */}
        {/*   <span className="text-focus text-xs flex absolute"> */}
        {/*     {logMessage.error} */}
        {/*   </span> */}
        {/* )} */}
        {/* {logMessage.success && ( */}
        {/*   <span className="text-secondary text-base flex absolute"> */}
        {/*     {logMessage.success} */}
        {/*   </span> */}
        {/* )} */}
        <button>Signin</button>
      </div>
    </form>
  );
};
export default SignIn;
