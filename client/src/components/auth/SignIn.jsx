import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./../../store/users/usersSlice.js";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { currentUser, errorMessage } = useSelector((state) => state.users);

  const handleSignUp = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

   const initialFocus = useRef()

   useEffect(()=>{
      initialFocus.current.focus()
      currentUser.name && navigate("/myads")
   },[currentUser,navigate])

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-around inset-y-64 inset-x-1/4 md:inset-x-1/3 absolute top-36">
      <h5 className="text-2xl font-bold">Sign In</h5>
      <label>Email 
            <input className="w-full" ref={initialFocus} type="email" name="email" placeholder="sample@gmail.com" onChange={handleSignUp}/>
      </label>
      <label>Password<input className="w-full" type="password" name="password" placeholder="*****" autoComplete="on" onChange={handleSignUp}/></label>
      <div>
        <button className="bg-focus text-bg disabled:bg-alert mt-4 rounded-sm px-3">SignIn</button>
      </div>
         <span className="text-secondary text-xs">Need an account?</span>
         <Link to="/signup"><span className="text-focus text-sm">Sign Up</span></Link>
         <div>{!!Object.keys(errorMessage).length  && ( <span className="text-alert text-base flex absolute">{errorMessage}</span>)}</div>
    </form>

  );
};
export default SignIn;
