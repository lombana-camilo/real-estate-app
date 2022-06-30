import { useNavigate } from "react-router-dom";
import landingImg from "./../../assets/images/landing.jpg";
const Landing = () => {
   const navigate = useNavigate()
  return (
    <div className="h-screen flex">
         <div className="w-1/2 bg-primary flex flex-col justify-center items-center text-center">
            <h1 className="text-bg font-bold text-4xl mb-5">Buy/Rent and Sale Your Property with</h1>
            <h1 className="text-focus font-bold text-5xl">REAL ESTATE APP</h1>
            <p className="text-bg/70 text-xl ">Publish your property or find your dream place</p>
            <button onClick={()=>navigate("/properties")}
               className="text-bg text-lg px-6 py-2 w-1/3 border-2 leading-tight rounded-md my-5 hover:bg-bg hover:text-primary">
               Get Started
            </button>
         </div>
         <img src={landingImg} alt="" className="h-screen w-1/2"/>
    </div>
  );
};

export default Landing;
