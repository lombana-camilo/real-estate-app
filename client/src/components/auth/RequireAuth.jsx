import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
const {currentUser} = useSelector(state=> state.users)
   const location = useLocation()
   return (
      currentUser?.name 
         ? <Outlet/>
         : <Navigate to="/signin" state={{from: location}} replace/>
   )
}

export default RequireAuth
