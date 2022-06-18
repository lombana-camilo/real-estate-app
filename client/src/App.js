import Nabvar from "./components/layout/Navbar";
import AdsList from "./components/Ads/AdsList";
import Footer from "./components/layout/Footer";
import FilterForm from "./components/layout/FilterForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-fit bg-bg text-primary font-Montserrat ">
      <Nabvar />
      <FilterForm />
      <Routes>
        <Route path="/" element={<AdsList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
