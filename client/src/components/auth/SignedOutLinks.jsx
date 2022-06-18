
import { Link } from "react-router-dom"

const SignedOutLinks = () => {
   return (
      <div>
     <Link to="signin">SignIn</Link>   
     <Link to="signup">SignUp</Link>   
      </div>
   )
}

export default SignedOutLinks
