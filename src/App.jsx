import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/girmanreact" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
