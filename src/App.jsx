import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./pages/inicio";
import Articulos from "./pages/articulos";
import Accesorios from "./pages/accesorios";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>

      <footer className="text-center mt-5">
        © 2026 Tienda-carrito
      </footer>
    </HashRouter>
  );
}

export default App;