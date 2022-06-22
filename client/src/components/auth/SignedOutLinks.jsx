
import { Link } from "react-router-dom"

const SignedOutLinks = () => {
   return (
      <div className="flex gap-3">
     <Link to="signin">SignIn</Link>   
     <Link to="signup">SignUp</Link>   
      </div>
   )
}

export default SignedOutLinks
