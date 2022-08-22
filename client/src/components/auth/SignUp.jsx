import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "./../../store/users/usersSlice.js";

const SignUp = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate()
  const { currentUser,errorMessage } = useSelector((state) => state.users);
  const [userData, setUserData] = useState({});
   const [error,setError] = useState({})

const validate = ({target})=>{
   const name = target.name
   const value = target.value

      if (name === "email"){
         if (!/^([a-z\d.-_]+)@([a-z\d]+)\.([a-z\d]+)$/.test(value)) {
            setError(oldState=> ({...oldState,[name]:"Enter a valid email"}))
         } else setError(oldState=> ({...oldState,[name]:""}))
      }
      if (name === "password"){
         if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(value)) {
            setError(oldState=> ({...oldState,[name]:"Minimum 5 characters, at least one letter and one number"}))
         } else setError(oldState=> ({...oldState,[name]:""}))
      }
   }
  const handleSignUp = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
      validate(e)
  };

const initialFocus = useRef()

   useEffect(()=>{
      initialFocus.current.focus()
      currentUser.name && navigate("/myads")
   },[currentUser,navigate])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData))
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit} className="flex flex-col justify-around inset-y-64 inset-x-1/4 md:inset-x-1/3 absolute top-36 gap-5" >
      <h5 className="text-2xl font-bold">Sign Up</h5>
      <label> Name <input ref={initialFocus} required className="w-full" type="text" name="name" onChange={handleSignUp} /> </label>
      <label> Email <input required className="w-full" type="email" name="email" placeholder="sample@gmail.com" onChange={handleSignUp} />
        {error.email && userData.email && ( <span className="text-alert text-xs flex absolute"> {error.email} </span>)}
      </label>
      <label>
        Password
        <input required className="w-full" type="password" name="password" placeholder="*****" autoComplete="on" onChange={handleSignUp} />
        {error.password && userData.password && ( <span className="text-alert text-xs flex absolute"> {error.password} </span>)}
      </label>
      <div>
        <button disabled={error.email || error.password} className="bg-focus text-bg disabled:bg-alert mt-4 rounded-sm px-3" > SignUp </button>
        {!!Object.keys(errorMessage).length  && ( <span  className="text-alert text-base flex absolute"> {errorMessage} </span>)}
      </div>
    </form>
  );
};
export default SignUp;
