import Landing from "./components/layout/Landing";
import MainRoutes from "./MainRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
