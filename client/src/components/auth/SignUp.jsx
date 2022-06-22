import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "./../../store/users/usersSlice.js";

const SignUp = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.users);
  const [userData, setUserData] = useState({});
  const handleSignUp = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

   useEffect(()=>{
      currentUser.name && navigate("/myads")
   },[currentUser,navigate])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-around inset-y-64 inset-x-1/3 absolute top-36" >
      <h5 className="text-2xl font-bold">Sign Up</h5>
      <label>
        Name
        <input required className="w-full" type="text" name="name" onChange={handleSignUp} />
      </label>
      <label>
        Email
        <input className="w-full" type="email" name="email" placeholder="sample@gmail.com" onChange={handleSignUp} />
        {/* {error.email && signup.email && ( */}
        {/*   <span className="text-focus text-xs flex absolute"> */}
        {/*     {error.email} */}
        {/*   </span> */}
        {/* )} */}
      </label>
      <label>
        Password
        <input className="w-full" type="password" name="password" placeholder="*****" onChange={handleSignUp} />
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
        <button>Signup</button>
      </div>
    </form>
  );
};
export default SignUp;
