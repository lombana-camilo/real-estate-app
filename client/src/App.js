import Nabvar from "./components/layout/Navbar";
import AdsList from "./components/Ads/AdsList";
import Footer from "./components/layout/Footer";
import Details from "./components/Ads/Details"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Nabvar />
      <Routes>
        <Route path="/properties" element={<AdsList />} />
        <Route path="/properties/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
