import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import Accessories from "./pages/accessories";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>

      <footer className="text-center mt-5">
        © 2026 Shop Cart
      </footer>
    </HashRouter>
  );
}

export default App;