import Nabvar from "./components/layout/Navbar";
import AdsList from "./components/Ads/AdsList";
import Footer from "./components/layout/Footer";
import Details from "./components/Ads/Details"
import MyAds from "./components/Ads/MyAds"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Nabvar />
      <Routes>
        <Route path="/properties" element={<AdsList />} />
        <Route path="/properties/:id" element={<Details />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myads" element={<MyAds />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
