import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="flex gap-3">
      <Link to="signin">SignIn</Link>
      <Link to="signup">SignUp</Link>
      <Link to="/myAds" className="text-focus bg-primary rounded-lg px-2">My Ads</Link>
    </div>
  );
};

export default SignedOutLinks;
